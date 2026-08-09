import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Field, FormStatus, RatingInput, Select, TextArea, TextInput } from "./Field";
import { ActionButton } from "../ui-kit";
import { feedbackTypes } from "@/data/restaurant";
import { clean, limitText, type Errors } from "@/lib/validation";

const initialText = {
  name: "",
  contact: "",
  visitDate: "",
  feedbackType: "General Feedback",
  favouriteDish: "",
  enjoyedMost: "",
  comments: "",
  recommend: "",
  contactRequested: false,
};

type Ratings = {
  overall: number | null;
  food: number | null;
  service: number | null;
  cleanliness: number | null;
  ambience: number | null;
  value: number | null;
};

const initialRatings: Ratings = {
  overall: null,
  food: null,
  service: null,
  cleanliness: null,
  ambience: null,
  value: null,
};

export function FeedbackForm() {
  const [values, setValues] = useState(initialText);
  const [ratings, setRatings] = useState<Ratings>(initialRatings);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "success">("idle");
  const [message, setMessage] = useState("");

  const set = (key: keyof typeof initialText) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [key]: e.target.value }));
  const rate = (key: keyof Ratings) => (score: number) => setRatings((r) => ({ ...r, [key]: score }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    const name = values.name.trim();
    if (name.length < 2) next["name"] = "Please enter your name (at least 2 characters).";
    if (!ratings.overall) next["overall"] = "Please give an overall rating.";
    limitText(values.comments, 2000, "your comments", next, "comments");
    limitText(values.enjoyedMost, 1000, "this answer", next, "enjoyedMost");
    setErrors(next);
    if (Object.keys(next).length) {
      setStatus("error");
      setMessage("Please correct the highlighted fields and submit again.");
      return;
    }

    setStatus("loading");
    const { error } = await supabase.from("feedback").insert({
      name,
      contact: clean(values.contact),
      visit_date: values.visitDate || null,
      feedback_type: values.feedbackType,
      rating_overall: ratings.overall as number,
      rating_food: ratings.food,
      rating_service: ratings.service,
      rating_cleanliness: ratings.cleanliness,
      rating_ambience: ratings.ambience,
      rating_value: ratings.value,
      favourite_dish: clean(values.favouriteDish),
      enjoyed_most: clean(values.enjoyedMost),
      comments: clean(values.comments),
      would_recommend: values.recommend === "" ? null : values.recommend === "yes",
      contact_requested: values.contactRequested,
    });

    if (error) {
      setStatus("error");
      setMessage("We could not send your feedback just now. Please try again in a moment.");
      return;
    }
    setStatus("success");
    setMessage("Thank you for sharing your experience — every word reaches our team.");
    setValues(initialText);
    setRatings(initialRatings);
  };

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-6">
      {status === "success" || status === "error" ? (
        <FormStatus state={status === "success" ? "success" : "error"} message={message} />
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="f-name" required error={errors["name"]}>
          <TextInput id="f-name" autoComplete="name" value={values.name} onChange={set("name")} aria-invalid={Boolean(errors["name"])} />
        </Field>
        <Field label="Email or Phone" htmlFor="f-contact">
          <TextInput id="f-contact" value={values.contact} onChange={set("contact")} />
        </Field>
        <Field label="Visit Date" htmlFor="f-date">
          <TextInput id="f-date" type="date" value={values.visitDate} onChange={set("visitDate")} />
        </Field>
        <Field label="Feedback Type" htmlFor="f-type" required>
          <Select id="f-type" value={values.feedbackType} onChange={set("feedbackType")}>
            {feedbackTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <div className="hairline-gold flex flex-col gap-6 rounded-lg bg-secondary/60 p-5">
        <RatingInput name="overall" label="Overall Experience" value={ratings.overall} onChange={rate("overall")} required error={errors["overall"]} />
        <RatingInput name="food" label="Food" value={ratings.food} onChange={rate("food")} />
        <RatingInput name="service" label="Service" value={ratings.service} onChange={rate("service")} />
        <RatingInput name="cleanliness" label="Cleanliness" value={ratings.cleanliness} onChange={rate("cleanliness")} />
        <RatingInput name="ambience" label="Ambience" value={ratings.ambience} onChange={rate("ambience")} />
        <RatingInput name="value" label="Value for Money" value={ratings.value} onChange={rate("value")} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Favourite Dish" htmlFor="f-dish">
          <TextInput id="f-dish" value={values.favouriteDish} onChange={set("favouriteDish")} />
        </Field>
        <Field label="Would you recommend us?" htmlFor="f-recommend">
          <Select id="f-recommend" value={values.recommend} onChange={set("recommend")}>
            <option value="">Prefer not to say</option>
            <option value="yes">Yes, gladly</option>
            <option value="no">Not yet</option>
          </Select>
        </Field>
      </div>

      <Field label="What did you enjoy most?" htmlFor="f-enjoyed" error={errors["enjoyedMost"]}>
        <TextArea id="f-enjoyed" rows={3} maxLength={1000} value={values.enjoyedMost} onChange={set("enjoyedMost")} aria-invalid={Boolean(errors["enjoyedMost"])} />
      </Field>

      <Field label="Comments" htmlFor="f-comments" error={errors["comments"]} hint="Tell us anything that would help us serve you better.">
        <TextArea id="f-comments" rows={5} maxLength={2000} value={values.comments} onChange={set("comments")} aria-invalid={Boolean(errors["comments"])} />
      </Field>

      <label className="flex min-h-11 items-start gap-3 text-sm text-foreground">
        <input
          type="checkbox"
          checked={values.contactRequested}
          onChange={(e) => setValues((v) => ({ ...v, contactRequested: e.target.checked }))}
          className="mt-1 size-5 accent-[var(--primary)]"
        />
        <span>Yes, I would like someone from the team to contact me about this feedback.</span>
      </label>

      <p className="text-xs leading-relaxed text-muted-foreground">
        Your feedback reaches our team privately and is never published on this website.
      </p>

      <ActionButton type="submit" disabled={status === "loading"} className="sm:self-start">
        {status === "loading" ? "Sending feedback…" : "Share Feedback"}
      </ActionButton>
    </form>
  );
}
