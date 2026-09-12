import { Section } from "@/components/ui/Section";
import { CTABand } from "@/components/ui/CTABand";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { trustStats } from "@/lib/data/proof";
import { pageMetadata } from "@/lib/seo/metadata";

export const metadata = pageMetadata.about;

/**
 * About_Page (Req 4). Company story (4.1), price/quality guarantee incl. the
 * exact "Best result 100% guaranteed!" line (4.2), free design consultation
 * description (4.3), and a Contact CTA (4.4). One <h1>, <h2> subsections (12.3).
 */
export default function AboutPage() {
  return (
    <>
      {/* Intro */}
      <section className="wood-grain w-full">
        <div className="mx-auto max-w-6xl px-4 py-section-lg sm:px-6 lg:px-8">
          <p className="flex items-center gap-3 font-sans text-eyebrow font-semibold uppercase text-oak-300">
            <span aria-hidden="true" className="h-px w-10 bg-oak-300/70" />
            Our story
          </p>
          <h1 className="mt-6 max-w-3xl font-display text-display-lg text-cream-50">
            Craftsmen first. Salespeople never.
          </h1>
          <p className="mt-6 max-w-2xl text-body-lg text-cream-100">
            For over two decades, Brightwell Floors has treated every board like
            it&rsquo;s going into our own home &mdash; because the floor is the
            one part of a room you touch every single day.
          </p>
        </div>
      </section>

      {/* Stat band */}
      <section className="border-b border-cream-200 bg-cream-100">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
          {trustStats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-display-sm text-walnut-900">
                {s.value}
              </p>
              <p className="mt-1 text-body-sm text-charcoal-700">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <Section eyebrow="Where we started" heading="Built on a simple belief">
        <div className="mt-6 max-w-3xl space-y-4 text-body-lg text-charcoal-700">
          <p>
            Brightwell Floors began as a small crew of flooring specialists who
            believed a real wood floor should be chosen with care and installed
            with craftsmanship. That belief hasn&rsquo;t changed. Today we&rsquo;re
            a trusted team of installers and design consultants, but we still run
            every project &mdash; a single room or a whole home &mdash; the same
            way: with our own hands and our name on the line.
          </p>
          <p>
            We handpick the finest hardwoods from around the world and refine our
            installation methods so every floor is built to last a lifetime. It&rsquo;s
            traditional woodworking know-how paired with a modern, no-pressure,
            customer-first approach.
          </p>
        </div>
      </Section>

      {/* Guarantee — designed feature block (Req 4.2) */}
      <Section className="bg-cream-100 grain-overlay">
        <div className="mx-auto max-w-4xl rounded-3xl bg-walnut-900 p-10 text-center shadow-lift md:p-14">
          <p className="font-sans text-eyebrow font-semibold uppercase tracking-wider text-oak-300">
            The Brightwell Promise
          </p>
          <p className="mt-4 font-display text-display-sm text-cream-50 md:text-display-md">
            We will never lose on price &amp; we always win on quality.
          </p>
          <p className="mt-6 text-body-lg text-cream-100">
            Because we source hardwoods directly and stand behind every
            installation, we can beat any comparable quote while delivering a
            superior floor. Find a better price on the same quality of work? We
            want to hear about it.
          </p>
          <p className="mt-8 font-display text-heading-lg text-brass-400">
            Best result 100% guaranteed!
          </p>
        </div>
      </Section>

      {/* Free consultation (Req 4.3) */}
      <Section
        eyebrow="No charge, no pressure"
        heading="Guidance, not a sales pitch"
        intro="Choosing a floor should be exciting, not overwhelming — so our design consultants do the heavy lifting, at no charge."
      >
        <p className="mt-6 max-w-3xl text-body-md text-charcoal-700">
          We&rsquo;ll show a room with multiple choices side by side &mdash;
          different species, widths, stains, and styles &mdash; so you see
          exactly how each option looks before you commit.
        </p>
      </Section>

      {/* How we work — absorbed from the retired Services page. */}
      <ProcessSteps />

      <CTABand />
    </>
  );
}
