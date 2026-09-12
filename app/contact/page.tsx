import { QuoteForm } from "@/components/contact/QuoteForm";
import { business } from "@/lib/data/business";
import { trustStats } from "@/lib/data/proof";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata.contact;

/**
 * Contact_Page (Req 10). Server component; QuoteForm is the client boundary.
 * Shows business details (10.1) and the validated QuoteForm (10.2+). Two-column
 * layout: reassurance + details sidebar next to the form. One <h1>, <h2>s (12.3).
 */
export default function ContactPage() {
  return (
    <>
      {/* Intro */}
      <section className="wood-grain w-full">
        <div className="mx-auto max-w-6xl px-4 py-section-lg sm:px-6 lg:px-8">
          <p className="flex items-center gap-3 font-sans text-eyebrow font-semibold uppercase text-oak-300">
            <span aria-hidden="true" className="h-px w-10 bg-oak-300/70" />
            Free quote &amp; consultation
          </p>
          <h1 className="mt-6 max-w-3xl font-display text-display-lg text-cream-50">
            Let&rsquo;s find your perfect floor
          </h1>
          <p className="mt-6 max-w-2xl text-body-lg text-cream-100">
            Tell us about your project and we&rsquo;ll get back to you fast with
            honest advice and an unbeatable quote. No charge, no obligation.
          </p>
        </div>
      </section>

      <section className="w-full py-section-sm md:py-section lg:py-section-lg">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:gap-16 lg:px-8">
          {/* Form */}
          <div className="lg:col-span-3">
            <h2 className="font-display text-display-sm text-walnut-900">
              Request your free quote
            </h2>
            <p className="mt-3 max-w-xl text-body-md text-charcoal-700">
              Fields marked with an asterisk are required. We&rsquo;ll never
              share your details.
            </p>
            <div className="mt-8">
              <QuoteForm />
            </div>
          </div>

          {/* Reassurance + details sidebar */}
          <aside className="lg:col-span-2">
            <div className="rounded-3xl bg-cream-100 p-8 shadow-soft ring-1 ring-cream-200">
              <h2 className="font-display text-heading-lg text-walnut-900">
                Talk to a person
              </h2>
              <dl className="mt-6 space-y-5 text-body-md">
                <div>
                  <dt className="font-semibold text-walnut-900">Phone</dt>
                  <dd>
                    <a
                      href={`tel:${business.phone.replace(/[^0-9+]/g, "")}`}
                      className="focus-ring rounded-sm text-oak-500 underline-offset-4 hover:underline"
                    >
                      {business.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-walnut-900">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${business.email}`}
                      className="focus-ring rounded-sm break-words text-oak-500 underline-offset-4 hover:underline"
                    >
                      {business.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-walnut-900">Showroom</dt>
                  <dd className="text-charcoal-700">{business.address}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-walnut-900">
                    Service Area
                  </dt>
                  <dd className="text-charcoal-700">{business.serviceArea}</dd>
                </div>
              </dl>

              <div className="mt-8 space-y-3 border-t border-cream-200 pt-6">
                {trustStats.map((s) => (
                  <p
                    key={s.label}
                    className="flex items-baseline gap-2 text-body-md text-charcoal-700"
                  >
                    <span className="font-display text-heading-md text-walnut-900">
                      {s.value}
                    </span>
                    {s.label}
                  </p>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
