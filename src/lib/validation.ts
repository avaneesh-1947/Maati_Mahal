export type Errors = Record<string, string>;

export const isPhone = (value: string) => /^[+]?[\d\s-]{6,20}$/.test(value.trim());
export const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());

export function requireName(value: string, errors: Errors, key = "name") {
  const v = value.trim();
  if (v.length < 2) errors[key] = "Please enter your full name (at least 2 characters).";
  else if (v.length > 100) errors[key] = "Please keep the name under 100 characters.";
}

export function requirePhone(value: string, errors: Errors, key = "phone") {
  if (!value.trim()) errors[key] = "Please enter a phone number so we can confirm with you.";
  else if (!isPhone(value)) errors[key] = "Please enter a valid phone number.";
}

export function optionalEmail(value: string, errors: Errors, key = "email") {
  if (value.trim() && !isEmail(value)) errors[key] = "Please enter a valid email address.";
}

export function limitText(value: string, max: number, label: string, errors: Errors, key: string) {
  if (value.length > max) errors[key] = `Please keep ${label} under ${max} characters.`;
}

/** Trim and collapse whitespace; returns null for empty optional values. */
export const clean = (value: string): string | null => {
  const v = value.trim().replace(/\s+/g, " ");
  return v.length ? v : null;
};
