import Link from "next/link";
import { business } from "@/lib/data/business";
import { footerLinks } from "@/lib/data/navigation";
import { CTAButton } from "@/components/ui/CTAButton";
import { Logo } from "@/components/layout/Logo";

/**
 * Footer — shared site footer rendered on every page via the root layout
 * (Req 2.1). Presents the business details (Req 2.2), navigation links
 * (Req 2.3), and a Contact CTA (Req 2.4). Server Component; interactive links
 * carry a visible focus ring (Req 13.3) and cream-on-walnut contrast (Req 13.4).
 */
export function Footer() {
  const linkClasses =
    "focus-ring rounded-sm text-cream-100/90 no-underline transition-colors " +
    "duration-200 hover:text-brass-400";

  return (
    <footer className="bg-walnut-950 text-cream-100">
      <div className="mx-auto w-full max-w-7xl px-4 py-section sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Brand + pitch */}
          <div className="md:col-span-5">
            <Logo tone="light" />
            <p className="mt-5 max-w-sm text-body-md text-cream-100/85">
              Premium real wood floors, designed, supplied, and installed by
              craftsmen &mdash; and 100% guaranteed.
            </p>
          </div>

          {/* Explore */}
          <nav aria-label="Footer" className="md:col-span-3">
            <h2 className="text-eyebrow font-semibold uppercase tracking-wider text-oak-300">
              Explore
            </h2>
            <ul className="mt-5 space-y-3 text-body-md">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClasses}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact + CTA */}
          <div className="md:col-span-4">
            <h2 className="text-eyebrow font-semibold uppercase tracking-wider text-oak-300">
              Get in touch
            </h2>
            <address className="mt-5 space-y-3 not-italic text-body-md text-cream-100/90">
              <p>
                <a
                  href={`tel:${business.phone.replace(/[^\d+]/g, "")}`}
                  className={linkClasses}
                >
                  {business.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${business.email}`} className={linkClasses}>
                  {business.email}
                </a>
              </p>
              <p>{business.address}</p>
              <p className="text-cream-100/70">
                Serving {business.serviceArea}
              </p>
            </address>
            <div className="mt-6">
              <CTAButton>Get a Free Quote</CTAButton>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-cream-50/15 pt-6 text-body-sm text-cream-100/70">
          <p>
            &copy; {new Date().getFullYear()} Brightwell Floors. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
