"use client";

import { useRef, useState, type FormEvent } from "react";
import {
  quoteFormSchema,
  validateQuoteForm,
  type FieldName,
  type QuoteFormErrors,
  type QuoteFormValues,
} from "@/lib/validation/quoteForm";

/**
 * QuoteForm (Client Component)
 *
 * Controlled Quote Form for the Contact page. It captures the required
 * name/email/phone fields and the optional projectDetails/message fields
 * (Req 10.2), validates on submit with the pure `validateQuoteForm`
 * (Req 10.3–10.5), manages submission/success/error states (Req 10.6–10.8),
 * and is fully accessible: associated labels, required markers,
 * `aria-describedby`-linked error messages, `aria-invalid` on invalid fields,
 * a visible focus ring, and an `aria-live` status region (Req 13.1–13.3).
 */

/** Submission lifecycle state for the form. */
export type SubmitStatus = "idle" | "submitting" | "success" | "error";

/** The empty/initial values used on mount and after a successful submit. */
const EMPTY_VALUES: QuoteFormValues = {
  name: "",
  email: "",
  phone: "",
  projectDetails: "",
  message: "",
};

/**
 * Placeholder async submit handler. Resolves after a short delay to exercise
 * the success path; this can later be swapped for a real backend call (e.g. a
 * `fetch` to an API route) without changing the component's state machine.
 */
async function submitQuote(_values: QuoteFormValues): Promise<void> {
  await new Promise<void>((resolve) => {
    setTimeout(resolve, 600);
  });
}

export interface QuoteFormProps {
  /**
   * Injectable submit handler. Defaults to the placeholder {@link submitQuote}.
   * Tests can pass a resolving/rejecting stub to drive success/error states.
   */
  onSubmit?: (values: QuoteFormValues) => Promise<void>;
}

export function QuoteForm({ onSubmit = submitQuote }: QuoteFormProps) {
  const [values, setValues] = useState<QuoteFormValues>(EMPTY_VALUES);
  const [errors, setErrors] = useState<QuoteFormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");

  // Refs to each field so we can move focus to the first invalid field
  // after a failed validation pass (Req 13.2 keyboard support).
  const fieldRefs = useRef<
    Partial<Record<FieldName, HTMLInputElement | HTMLTextAreaElement | null>>
  >({});

  const isSubmitting = status === "submitting";

  function handleChange(name: FieldName, value: string) {
    setValues((prev) => ({ ...prev, [name]: value }));
    // Clear a field's error as the visitor edits it, keeping messages honest.
    setErrors((prev) => {
      if (!(name in prev)) {
        return prev;
      }
      const next = { ...prev };
      delete next[name];
      return next;
    });
    // Leaving the success state as soon as the visitor types again.
    if (status === "success") {
      setStatus("idle");
    }
  }

  function focusFirstError(nextErrors: QuoteFormErrors) {
    const firstInvalid = quoteFormSchema.find(
      (field) => nextErrors[field.name] !== undefined,
    );
    if (firstInvalid) {
      fieldRefs.current[firstInvalid.name]?.focus();
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Prevent duplicate submissions while a request is in flight (Req 10.7).
    if (isSubmitting) {
      return;
    }

    const nextErrors = validateQuoteForm(values);
    if (Object.keys(nextErrors).length > 0) {
      // Block submission, surface messages, preserve input (Req 10.3–10.5).
      setErrors(nextErrors);
      setStatus("idle");
      focusFirstError(nextErrors);
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      await onSubmit(values);
      // Success: confirm and clear the fields (Req 10.6).
      setValues(EMPTY_VALUES);
      setStatus("success");
    } catch {
      // Failure: show an error indication, preserve entered input (Req 10.8).
      setStatus("error");
    }
  }

  const statusMessage =
    status === "success"
      ? "Thank you — your request has been submitted. We'll be in touch soon."
      : status === "error"
        ? "Something went wrong submitting your request. Please try again."
        : "";

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      aria-describedby="quote-form-status"
      className="w-full max-w-2xl space-y-6"
    >
      {/*
        Live status region announces success/error to assistive tech
        (Req 13.1–13.3). `assertive` so failures interrupt; success is
        equally important for confirmation.
      */}
      <p
        id="quote-form-status"
        role="status"
        aria-live="assertive"
        className={
          status === "success"
            ? "rounded-md bg-cream-100 px-4 py-3 text-body-md text-walnut-900"
            : status === "error"
              ? "rounded-md bg-cream-100 px-4 py-3 text-body-md text-walnut-900"
              : "sr-only"
        }
      >
        {statusMessage}
      </p>

      {quoteFormSchema.map((field) => {
        const error = errors[field.name];
        const errorId = `${field.name}-error`;
        const value = values[field.name];
        const describedBy = error ? errorId : undefined;

        return (
          <div key={field.name} className="flex flex-col gap-2">
            <label
              htmlFor={field.name}
              className="font-sans text-body-md font-semibold text-walnut-900"
            >
              {field.label}
              {field.required ? (
                <span className="text-brass" aria-hidden="true">
                  {" *"}
                </span>
              ) : (
                <span className="text-charcoal-700 text-body-sm font-normal">
                  {" (optional)"}
                </span>
              )}
            </label>

            {field.type === "textarea" ? (
              <textarea
                id={field.name}
                name={field.name}
                ref={(el) => {
                  fieldRefs.current[field.name] = el;
                }}
                value={value}
                required={field.required}
                aria-required={field.required || undefined}
                aria-invalid={error ? true : undefined}
                aria-describedby={describedBy}
                disabled={isSubmitting}
                onChange={(e) => handleChange(field.name, e.target.value)}
                rows={4}
                className="focus-ring rounded-md border border-oak-300 bg-cream-50 px-4 py-3 text-body-md text-charcoal-900 disabled:opacity-60"
              />
            ) : (
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                ref={(el) => {
                  fieldRefs.current[field.name] = el;
                }}
                value={value}
                required={field.required}
                aria-required={field.required || undefined}
                aria-invalid={error ? true : undefined}
                aria-describedby={describedBy}
                disabled={isSubmitting}
                onChange={(e) => handleChange(field.name, e.target.value)}
                className="focus-ring rounded-md border border-oak-300 bg-cream-50 px-4 py-3 text-body-md text-charcoal-900 disabled:opacity-60"
              />
            )}

            {error ? (
              <p
                id={errorId}
                className="text-body-sm font-medium text-walnut-800"
              >
                {error}
              </p>
            ) : null}
          </div>
        );
      })}

      <button
        type="submit"
        disabled={isSubmitting}
        className="focus-ring inline-flex items-center justify-center rounded-md bg-brass px-6 py-3 font-sans text-body-md font-semibold text-cream-50 transition-colors duration-200 hover:bg-walnut-800 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Submitting…" : "Request My Free Quote"}
      </button>
    </form>
  );
}

export default QuoteForm;
