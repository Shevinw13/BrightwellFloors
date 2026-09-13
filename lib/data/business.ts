/**
 * Business details for Brightwell Floors.
 *
 * Contact details are the parent company's (BrightWell Talent Solutions,
 * Atlanta GA) per the client. The email is a floors-specific address; swap for
 * a dedicated line if one exists. Centralized here as the single source of
 * truth for the header, footer, and Contact page.
 *
 * Requirements: 2.2, 10.1
 */

export interface BusinessDetails {
  phone: string;
  email: string;
  address: string;
  serviceArea: string;
}

export const business: BusinessDetails = {
  phone: "(404) 843-9200",
  email: "floors@brightwelltalent.com",
  address: "4715 Lake Forest Drive, Suite 1200, Atlanta, GA 30342",
  serviceArea: "Greater Atlanta & surrounding communities",
};
