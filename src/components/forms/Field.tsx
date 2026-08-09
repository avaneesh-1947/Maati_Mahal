import type { ReactNode } from "react";

const controlBase =
  "min-h-11 w-full rounded-md border border-input bg-card px-3.5 py-2.5 text-base text-foreground transition-colors placeholder:text-muted-foreground/70 focus:border-ring aria-[invalid=true]:border-destructive";

export function Field({
  label,
  htmlFor,
  required,
  error,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean | undefined;
  error?: string | undefined;
  hint?: string | undefined;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-semibold text-primary">
        {label}
        {required ? (
          <span className="text-destructive"> *</span>
        ) : (
          <span className="ml-1 text-xs font-normal text-muted-foreground">(optional)</span>
        )}
      </label>
      {children}
      {hint ? <p className="text-xs text-muted-foreground">{hint}</p> : null}
      {error ? (
        <p id={`${htmlFor}-error`} role="alert" className="text-sm font-medium text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`${controlBase} ${props.className ?? ""}`} />;
}

export function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} rows={props.rows ?? 4} className={`${controlBase} ${props.className ?? ""}`} />;
}

export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={`${controlBase} ${props.className ?? ""}`} />;
}

export function FormStatus({ state, message }: { state: "error" | "success"; message: string }) {
  const tone =
    state === "success"
      ? "border-forest/40 bg-forest/8 text-forest"
      : "border-destructive/40 bg-destructive/8 text-destructive";
  return (
    <p role="status" className={`rounded-md border px-4 py-3 text-sm font-medium ${tone}`}>
      {message}
    </p>
  );
}

const ratingLabels = ["Poor", "Fair", "Good", "Very Good", "Excellent"];

export function RatingInput({
  name,
  label,
  value,
  onChange,
  required,
  error,
}: {
  name: string;
  label: string;
  value: number | null;
  onChange: (value: number) => void;
  required?: boolean | undefined;
  error?: string | undefined;
}) {
  return (
    <fieldset className="flex flex-col gap-2">
      <legend className="text-sm font-semibold text-primary">
        {label}
        {required ? <span className="text-destructive"> *</span> : null}
      </legend>
      <div className="flex flex-wrap gap-2">
        {ratingLabels.map((labelText, index) => {
          const score = index + 1;
          const active = value === score;
          return (
            <label
              key={score}
              className={`flex min-h-11 cursor-pointer items-center gap-2 rounded-md border px-3 text-sm font-medium transition-colors ${
                active
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-input bg-card text-foreground hover:border-ring"
              }`}
            >
              <input
                type="radio"
                name={name}
                value={score}
                checked={active}
                onChange={() => onChange(score)}
                className="sr-only"
              />
              <span aria-hidden="true">{score}</span>
              <span>{labelText}</span>
            </label>
          );
        })}
      </div>
      {error ? (
        <p role="alert" className="text-sm font-medium text-destructive">
          {error}
        </p>
      ) : null}
    </fieldset>
  );
}
