/**
 * Quote Form validation module.
 *
 * Pure, side-effect-free validation logic for the Contact page Quote Form.
 * These functions are the central target for property-based testing and drive
 * all form-validation acceptance criteria (Requirements 10.2–10.6).
 *
 * Design note: every function here is pure and idempotent — the same input
 * always yields the same output and no input is ever mutated.
 */

/** The set of field names the Quote Form captures. */
export type FieldName =
  | "name"
  | "email"
  | "phone"
  | "projectDetails"
  | "message";

/** The values captured by the Quote Form. */
export interface QuoteFormValues {
  name: string;
  email: string;
  phone: string;
  /** Optional. */
  projectDetails: string;
  /** Optional. */
  message: string;
}

/**
 * Result of validating the whole form: a map of the fields that failed
 * validation to a human-readable error message.
 */
export type QuoteFormErrors = Partial<Record<FieldName, string>>;

/**
 * Structured validation result: the per-field error map plus an overall
 * `isValid` boolean derived from it.
 */
export interface ValidationResult {
  /** Map of field name -> error message for every failing field. */
  errors: QuoteFormErrors;
  /** True when there are no field errors. */
  isValid: boolean;
}

/** Declarative specification for a single form field. */
export interface FieldSpec {
  name: FieldName;
  label: string;
  type: "text" | "email" | "tel" | "textarea";
  required: boolean;
  /** Field-level validator: returns an error message, or null when valid. */
  validate?: (value: string) => string | null;
}

/**
 * A value is considered empty when its trimmed length is zero. This means
 * all-whitespace strings count as empty for required-field checks (Req 10.3).
 */
export function isEmpty(value: string): boolean {
  return value.trim().length === 0;
}

/**
 * Email format validation. Accepts a `local@domain.tld` shape: a non-empty
 * local part, a single `@`, a domain, and a top-level domain of at least two
 * letters. Whitespace is not allowed anywhere in the address.
 *
 * Returns an error message for malformed non-empty input, otherwise null.
 * An empty value is treated as "not a format error" here — presence of a
 * required field is handled separately by the required-field check.
 */
export function validateEmail(value: string): string | null {
  if (isEmpty(value)) {
    return null;
  }
  // local@domain.tld — no whitespace, at least one char before @,
  // a dotted domain, and a 2+ letter TLD.
  const emailPattern = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/;
  return emailPattern.test(value.trim())
    ? null
    : "Please enter a valid email address.";
}

/**
 * Phone format validation. Accepts digits and common separators
 * (spaces, hyphens, dots, parentheses, and a single leading `+`), and requires
 * a plausible digit count in the range 7–15 (E.164 upper bound).
 *
 * Returns an error message for malformed non-empty input, otherwise null.
 * An empty value defers to the required-field check.
 */
export function validatePhone(value: string): string | null {
  if (isEmpty(value)) {
    return null;
  }
  const trimmed = value.trim();
  // Allowed characters: digits, spaces, hyphens, dots, parentheses, and an
  // optional single leading plus sign.
  const allowedCharsPattern = /^\+?[\d\s().-]+$/;
  if (!allowedCharsPattern.test(trimmed)) {
    return "Please enter a valid phone number.";
  }
  const digitCount = (trimmed.match(/\d/g) ?? []).length;
  if (digitCount < 7 || digitCount > 15) {
    return "Please enter a valid phone number.";
  }
  return null;
}

/**
 * The declarative schema driving the Quote Form. Order reflects display order.
 */
export const quoteFormSchema: FieldSpec[] = [
  { name: "name", label: "Name", type: "text", required: true },
  {
    name: "email",
    label: "Email",
    type: "email",
    required: true,
    validate: validateEmail,
  },
  {
    name: "phone",
    label: "Phone",
    type: "tel",
    required: true,
    validate: validatePhone,
  },
  {
    name: "projectDetails",
    label: "Project Details",
    type: "text",
    required: false,
  },
  { name: "message", label: "Message", type: "textarea", required: false },
];

/**
 * Validate the whole Quote Form.
 *
 * For each field in the schema:
 *  - If the field is required and empty, records a "required" message.
 *  - Otherwise, if a field-level validator is present, records its message
 *    (when it returns non-null).
 *
 * Pure and idempotent: depends only on `values` and never mutates it.
 *
 * Returns a map of failing field -> message. Fields that pass are absent.
 */
export function validateQuoteForm(values: QuoteFormValues): QuoteFormErrors {
  const errors: QuoteFormErrors = {};

  for (const field of quoteFormSchema) {
    const value = values[field.name] ?? "";

    if (field.required && isEmpty(value)) {
      errors[field.name] = `${field.label} is required.`;
      continue;
    }

    if (field.validate) {
      const message = field.validate(value);
      if (message !== null) {
        errors[field.name] = message;
      }
    }
  }

  return errors;
}

/**
 * Convenience wrapper returning a structured {@link ValidationResult} with an
 * overall `isValid` flag alongside the per-field error map.
 */
export function validateQuoteFormResult(
  values: QuoteFormValues,
): ValidationResult {
  const errors = validateQuoteForm(values);
  return { errors, isValid: Object.keys(errors).length === 0 };
}
