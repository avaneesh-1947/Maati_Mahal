import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Field, FormStatus, Select, TextArea, TextInput } from "./Field";
import { ActionButton } from "../ui-kit";
import { eventTypes } from "@/data/restaurant";
import { clean, limitText, optionalEmail, requireName, requirePhone, type Errors } from "@/lib/validation";

const initial = {
  name: "",
  phone: "",
  email: "",
  eventType: "",
  eventDate: "",
  guests: "",
  message: "",
};

export function EventForm() {
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
    if (!values.eventType) next["eventType"] = "Please choose the type of event.";
    if (values.guests) {
      const g = Number(values.guests);
      if (!Number.isInteger(g) || g < 1 || g > 5000) next["guests"] = "Please enter a valid number of guests.";
    }
    limitText(values.message, 1500, "your message", next, "message");
    setErrors(next);
    if (Object.keys(next).length) {
      setStatus("error");
      setMessage("Please correct the highlighted fields and submit again.");
      return;
    }

    setStatus("loading");
    const { error } = await supabase.from("event_enquiries").insert({
      name: values.name.trim(),
      phone: values.phone.trim(),
      email: clean(values.email),
      event_type: values.eventType,
      event_date: values.eventDate || null,
      guests: values.guests ? Number(values.guests) : null,
      message: clean(values.message),
    });

    if (error) {
      setStatus("error");
      setMessage("We could not send your enquiry just now. Please try again or call us directly.");
      return;
    }
    setStatus("success");
    setMessage("Thank you — your event enquiry has reached us. Our team will be in touch soon.");
    setValues(initial);
  };

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
      {status === "success" || status === "error" ? (
        <FormStatus state={status === "success" ? "success" : "error"} message={message} />
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="e-name" required error={errors["name"]}>
          <TextInput id="e-name" autoComplete="name" value={values.name} onChange={set("name")} aria-invalid={Boolean(errors["name"])} />
        </Field>
        <Field label="Phone" htmlFor="e-phone" required error={errors["phone"]}>
          <TextInput id="e-phone" type="tel" inputMode="tel" autoComplete="tel" value={values.phone} onChange={set("phone")} aria-invalid={Boolean(errors["phone"])} />
        </Field>
        <Field label="Email" htmlFor="e-email" error={errors["email"]}>
          <TextInput id="e-email" type="email" autoComplete="email" value={values.email} onChange={set("email")} aria-invalid={Boolean(errors["email"])} />
        </Field>
        <Field label="Event Type" htmlFor="e-type" required error={errors["eventType"]}>
          <Select id="e-type" value={values.eventType} onChange={set("eventType")} aria-invalid={Boolean(errors["eventType"])}>
            <option value="">Select an event type</option>
            {eventTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </Select>
        </Field>
        <Field label="Event Date" htmlFor="e-date">
          <TextInput id="e-date" type="date" value={values.eventDate} onChange={set("eventDate")} />
        </Field>
        <Field label="Estimated Guests" htmlFor="e-guests" error={errors["guests"]}>
          <TextInput id="e-guests" type="number" min={1} inputMode="numeric" value={values.guests} onChange={set("guests")} aria-invalid={Boolean(errors["guests"])} />
        </Field>
      </div>

      <Field label="Message" htmlFor="e-message" error={errors["message"]} hint="Menu preferences, Jain requirements, venue and timing details.">
        <TextArea id="e-message" maxLength={1500} value={values.message} onChange={set("message")} aria-invalid={Boolean(errors["message"])} />
      </Field>

      <ActionButton type="submit" disabled={status === "loading"} className="sm:self-start">
        {status === "loading" ? "Sending enquiry…" : "Send Event Enquiry"}
      </ActionButton>
    </form>
  );
}
