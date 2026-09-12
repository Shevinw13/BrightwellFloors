import { Section } from "./Section";
import { processSteps } from "@/lib/data/proof";

/**
 * ProcessSteps — a scannable, numbered "how it works" band. Reduces perceived
 * risk by making the path from inquiry to installation feel clear and easy.
 */
export function ProcessSteps() {
  return (
    <Section
      eyebrow="How it works"
      heading="From first hello to finished floor"
      intro="Four simple steps, designed around you."
    >
      <ol className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step) => (
          <li key={step.step} className="relative flex flex-col">
            <span
              aria-hidden="true"
              className="font-display text-display-md text-oak-300"
            >
              {step.step}
            </span>
            <h3 className="mt-3 font-display text-heading-md text-walnut-900">
              {step.title}
            </h3>
            <p className="mt-2 text-body-md text-charcoal-700">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export default ProcessSteps;
