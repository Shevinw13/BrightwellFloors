/**
 * Placeholder business details for Brightwell Floors.
 *
 * These values are intentionally placeholders and should be replaced with the
 * real business contact information before launch. Centralizing them here means
 * the Footer (Requirement 2.2) and Contact page (Requirement 10.1) read from a
 * single source of truth.
 *
 * Requirements: 2.2, 10.1
 */

export interface BusinessDetails {
  /** Contact phone number. Placeholder value. */
  phone: string;
  /** Contact email address. Placeholder value. */
  email: string;
  /** Physical/mailing address. Placeholder value. */
  address: string;
  /** Region the business services. Placeholder value. */
  serviceArea: string;
}

export const business: BusinessDetails = {
  // TODO: Replace placeholder values with real business details before launch.
  phone: "(555) 123-4567",
  email: "info@brightwellfloors.com",
  address: "123 Hardwood Lane, Suite 100, Springfield, ST 00000",
  serviceArea: "Greater Springfield and surrounding metro area",
};
