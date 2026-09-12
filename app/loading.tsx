/**
 * Route-level loading state (Req 1.6). Shown during route transitions so a
 * Visitor is never left on a blank screen while the next page resolves. Uses an
 * accessible status region with a spinner styled via Brand Theme tokens
 * (Req 14.1); the spinner respects reduced-motion preferences.
 */
export default function Loading() {
  return (
    <main
      role="status"
      aria-live="polite"
      className="flex min-h-[60vh] w-full flex-col items-center justify-center gap-4 bg-cream-50 px-6 py-section text-center"
    >
      <span
        aria-hidden="true"
        className="h-10 w-10 animate-spin rounded-full border-4 border-cream-100 border-t-brass motion-reduce:animate-none"
      />
      <span className="font-sans text-body-md text-charcoal-700">Loading…</span>
      <span className="sr-only">Loading page content</span>
    </main>
  );
}
