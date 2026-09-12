"use client";

import { useEffect } from "react";

/**
 * Route-segment error boundary (Req 1.6). If a route fails to load or render,
 * this replaces a blank screen with a clear error indication and a retry
 * affordance (`reset()`), so the Visitor is never stranded. Styled with the
 * Brand Theme tokens for a consistent premium look (Req 14.1).
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // Surface the error to the console/monitoring for diagnosis.
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <main
      role="alert"
      aria-live="assertive"
      className="flex min-h-[60vh] w-full flex-col items-center justify-center gap-6 bg-cream-50 px-6 py-section text-center"
    >
      <div className="flex max-w-xl flex-col items-center gap-4">
        <h1 className="font-display text-display-sm text-walnut-900">
          This page could not be loaded
        </h1>
        <p className="font-sans text-body-md text-charcoal-700">
          Something went wrong while loading this page. Please try again — your
          place on the site is safe.
        </p>
        <button
          type="button"
          onClick={reset}
          className="focus-ring inline-flex items-center justify-center rounded-md bg-brass px-6 py-3 font-sans text-body-md font-semibold text-cream-50 transition-colors duration-200 hover:bg-walnut-800"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
