import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Field, FormStatus, TextArea, TextInput } from "./Field";
import { ActionButton } from "../ui-kit";
import { clean, limitText, optionalEmail, requireName, requirePhone, type Errors } from "@/lib/validation";

const initial = { name: "", phone: "", email: "", subject: "", message: "" };

export function ContactForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "success">("idle");
  const [message, setMessage] = useState("");

  const set = (key: keyof typeof initial) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [key]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    requireName(values.name, next);
    requirePhone(values.phone, next);
    optionalEmail(values.email, next);
    if (values.message.trim().length < 5) next["message"] = "Please tell us a little more (at least 5 characters).";
    limitText(values.message, 2000, "your message", next, "message");
    limitText(values.subject, 150, "the subject", next, "subject");
    setErrors(next);
    if (Object.keys(next).length) {
      setStatus("error");
      setMessage("Please correct the highlighted fields and submit again.");
      return;
    }

    setStatus("loading");
    const { error } = await supabase.from("contact_messages").insert({
      name: values.name.trim(),
      phone: values.phone.trim(),
      email: clean(values.email),
      subject: clean(values.subject),
      message: values.message.trim(),
    });

    if (error) {
      setStatus("error");
      setMessage("We could not send your message just now. Please try again or call the restaurant.");
      return;
    }
    setStatus("success");
    setMessage("Thank you for writing to us — we will reply as soon as we can.");
    setValues(initial);
  };

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
      {status === "success" || status === "error" ? (
        <FormStatus state={status === "success" ? "success" : "error"} message={message} />
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="c-name" required error={errors["name"]}>
          <TextInput id="c-name" autoComplete="name" value={values.name} onChange={set("name")} aria-invalid={Boolean(errors["name"])} />
        </Field>
        <Field label="Phone" htmlFor="c-phone" required error={errors["phone"]}>
          <TextInput id="c-phone" type="tel" inputMode="tel" autoComplete="tel" value={values.phone} onChange={set("phone")} aria-invalid={Boolean(errors["phone"])} />
        </Field>
        <Field label="Email" htmlFor="c-email" error={errors["email"]}>
          <TextInput id="c-email" type="email" autoComplete="email" value={values.email} onChange={set("email")} aria-invalid={Boolean(errors["email"])} />
        </Field>
        <Field label="Subject" htmlFor="c-subject" error={errors["subject"]}>
          <TextInput id="c-subject" maxLength={150} value={values.subject} onChange={set("subject")} aria-invalid={Boolean(errors["subject"])} />
        </Field>
      </div>

      <Field label="Message" htmlFor="c-message" required error={errors["message"]}>
        <TextArea id="c-message" rows={5} maxLength={2000} value={values.message} onChange={set("message")} aria-invalid={Boolean(errors["message"])} />
      </Field>

      <ActionButton type="submit" disabled={status === "loading"} className="sm:self-start">
        {status === "loading" ? "Sending message…" : "Send Message"}
      </ActionButton>
    </form>
  );
}
