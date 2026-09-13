import { Section } from "@/components/ui/Section";
import { CTABand } from "@/components/ui/CTABand";
import { FeatureSplit } from "@/components/ui/FeatureSplit";
import { PageHeader } from "@/components/ui/PageHeader";
import { aboutImage, consultationImage } from "@/lib/data/images";
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
      <PageHeader
        eyebrow="Our story"
        title="Craftsmen first. Salespeople never."
        intro="For over two decades, Brightwell Floors has treated every board like it's going into our own home — because the floor is the one part of a room you touch every single day."
        image={aboutImage}
      />

      {/* Values band — a different credibility angle than the home hero stats. */}
      <section className="border-b border-cream-200 bg-cream-100">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
          {[
            {
              title: "Family-owned",
              body: "Independently run since day one — you deal with the people whose name is on the door.",
            },
            {
              title: "In-house craftsmen",
              body: "No subcontractors. The team that quotes your job is the team that installs it.",
            },
            {
              title: "Directly sourced wood",
              body: "We buy our hardwoods at the source, so you get better wood at an honest price.",
            },
          ].map((v) => (
            <div key={v.title}>
              <h2 className="font-display text-heading-md text-walnut-900">
                {v.title}
              </h2>
              <p className="mt-2 text-body-md text-charcoal-700">{v.body}</p>
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

      {/* Human story — a personal angle, distinct from the values band above. */}
      <FeatureSplit
        eyebrow="Why floors"
        heading="A trade passed down, not picked up"
        image={consultationImage}
      >
        <p>
          Brightwell started in a home workshop, learning to read grain and
          coax the best from every board. Decades later, that same care shows
          up in the quiet details &mdash; a seam you can&rsquo;t feel, a stain
          that catches the afternoon light just right.
        </p>
        <p>
          Most of our work comes by word of mouth: a neighbor sees a floor,
          asks who did it, and calls. That&rsquo;s the reputation we protect on
          every job.
        </p>
      </FeatureSplit>

      <CTABand
        heading="Let's build something you'll love"
        intro="Tell us about your space and we'll bring the samples to you."
        ctaLabel="Start Your Project"
      />
    </>
  );
}
