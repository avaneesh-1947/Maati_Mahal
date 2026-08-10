import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Field, FormStatus, Select, TextArea, TextInput } from "./Field";
import { ActionButton } from "../ui-kit";
import { occasions, timeSlots } from "@/data/restaurant";
import {
  clean,
  limitText,
  optionalEmail,
  requireName,
  requirePhone,
  type Errors,
} from "@/lib/validation";

const initial = {
  name: "",
  phone: "",
  email: "",
  date: "",
  time: "",
  guests: "2",
  occasion: "",
  request: "",
};

export function ReservationForm() {
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
    if (!values.date) next["date"] = "Please choose the date of your visit.";
    if (!values.time) next["time"] = "Please choose a preferred time.";
    const guests = Number(values.guests);
    if (!Number.isInteger(guests) || guests < 1 || guests > 200)
      next["guests"] = "Please enter the number of guests (1–200).";
    limitText(values.request, 600, "the special request", next, "request");
    setErrors(next);
    if (Object.keys(next).length) {
      setStatus("error");
      setMessage("Please correct the highlighted fields and submit again.");
      return;
    }

    const messageText = `*New Table Reservation Request*

*Name:* ${values.name.trim()}
*Phone:* ${values.phone.trim()}
${values.email ? `*Email:* ${values.email.trim()}\n` : ""}*Guests:* ${guests}
*Date:* ${values.date}
*Time:* ${values.time}
${values.occasion ? `*Occasion:* ${values.occasion.trim()}\n` : ""}${values.request ? `*Special Request:* ${values.request.trim()}\n` : ""}`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/919794293788?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");

    setStatus("loading");
    const { error } = await supabase.from("reservations").insert({
      name: values.name.trim(),
      phone: values.phone.trim(),
      email: clean(values.email),
      reservation_date: values.date,
      reservation_time: values.time,
      guests,
      occasion: clean(values.occasion),
      special_request: clean(values.request),
    });

    if (error) {
      setStatus("error");
      setMessage("We could not send your request just now. Please try again or call the restaurant.");
      return;
    }
    setStatus("success");
    setMessage(
      "Thank you — your table request has reached us. Our team will call you shortly to confirm.",
    );
    setValues(initial);
  };

  const today = new Date().toISOString().slice(0, 10);

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
      {status === "success" || status === "error" ? (
        <FormStatus state={status === "success" ? "success" : "error"} message={message} />
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" htmlFor="r-name" required error={errors["name"]}>
          <TextInput
            id="r-name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={set("name")}
            aria-invalid={Boolean(errors["name"])}
          />
        </Field>
        <Field label="Phone Number" htmlFor="r-phone" required error={errors["phone"]}>
          <TextInput
            id="r-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={set("phone")}
            aria-invalid={Boolean(errors["phone"])}
          />
        </Field>
        <Field label="Email" htmlFor="r-email" error={errors["email"]}>
          <TextInput
            id="r-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={set("email")}
            aria-invalid={Boolean(errors["email"])}
          />
        </Field>
        <Field label="Number of Guests" htmlFor="r-guests" required error={errors["guests"]}>
          <TextInput
            id="r-guests"
            name="guests"
            type="number"
            min={1}
            max={200}
            inputMode="numeric"
            value={values.guests}
            onChange={set("guests")}
            aria-invalid={Boolean(errors["guests"])}
          />
        </Field>
        <Field label="Date" htmlFor="r-date" required error={errors["date"]}>
          <TextInput
            id="r-date"
            name="date"
            type="date"
            min={today}
            value={values.date}
            onChange={set("date")}
            aria-invalid={Boolean(errors["date"])}
          />
        </Field>
        <Field label="Preferred Time" htmlFor="r-time" required error={errors["time"]}>
          <Select
            id="r-time"
            name="time"
            value={values.time}
            onChange={set("time")}
            aria-invalid={Boolean(errors["time"])}
          >
            <option value="">Select a time</option>
            {timeSlots.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </Select>
        </Field>
        <Field label="Occasion" htmlFor="r-occasion">
          <Select id="r-occasion" name="occasion" value={values.occasion} onChange={set("occasion")}>
            <option value="">Not specified</option>
            {occasions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <Field label="Special Request" htmlFor="r-request" error={errors["request"]} hint="Jain preparation, high chair, seating preference, wheelchair access.">
        <TextArea
          id="r-request"
          name="request"
          maxLength={600}
          value={values.request}
          onChange={set("request")}
          aria-invalid={Boolean(errors["request"])}
        />
      </Field>

      <p className="hairline-gold rounded-md bg-secondary px-4 py-3 text-sm text-muted-foreground">
        Reservation is confirmed only after confirmation from the restaurant team.
      </p>

      <ActionButton type="submit" disabled={status === "loading"} className="sm:self-start">
        {status === "loading" ? "Sending request…" : "Request Table"}
      </ActionButton>
    </form>
  );
}
