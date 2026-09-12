# Requirements Document

## Introduction

Brightwell Floors is a real wood flooring company. This document specifies the requirements for a full marketing website built with Next.js (React) and Tailwind CSS. The website educates visitors about wood flooring options, showcases past projects, and drives visitors toward requesting a free design consultation and quote.

The site consists of eight primary pages/sections: Home, About, Flooring Types, Styles/Options, Wood Species catalog, Gallery, Services/Design Consultation, and Contact/Quote Request. The site emphasizes the brand messaging of unbeatable price, guaranteed quality, and free expert design consultations. Style and structure are influenced by a reference flooring website, adapted to a premium wood-flooring aesthetic.

The website must be responsive across devices, follow SEO fundamentals, meet accessibility standards, and present a consistent brand theme with clear calls-to-action throughout.

## Glossary

- **Website**: The complete Brightwell Floors marketing website built with Next.js and Tailwind CSS.
- **Visitor**: A person browsing the Website in a web browser.
- **Navigation_Header**: The shared header component displaying the brand and links to primary pages, present on every page.
- **Footer**: The shared footer component displaying business details, secondary links, and legal information, present on every page.
- **Home_Page**: The landing page featuring the hero, brand taglines, value propositions, highlights, and a primary call-to-action.
- **About_Page**: The page describing company story, price/quality guarantee, and design consultation offering.
- **Flooring_Types_Page**: The page describing the three wood flooring categories (solid, engineered, composite engineered).
- **Styles_Page**: The page describing flooring board styles (strip, plank, parquet) and width/species/color guidance.
- **Species_Catalog**: The browsable list/grid of wood species offered.
- **Gallery_Page**: The page showcasing flooring project images.
- **Services_Page**: The page describing the free design consultation offering and its process.
- **Contact_Page**: The page containing business contact details and the Quote_Form.
- **Quote_Form**: The client-side validated form used to request a quote or consultation, capturing name, email, phone, project details, and message.
- **CTA**: A call-to-action element that directs a Visitor toward requesting a quote or consultation.
- **Brand_Theme**: The consistent visual styling (colors, typography, spacing, imagery) reflecting a premium wood-flooring aesthetic.
- **Placeholder_Business_Details**: Temporary business phone, email, address, and service area values intended to be replaced later.

## Requirements

### Requirement 1: Shared Navigation Header

**User Story:** As a Visitor, I want a consistent navigation header on every page, so that I can move between sections of the Website easily.

#### Acceptance Criteria

1. THE Navigation_Header SHALL display on the Home_Page, About_Page, Flooring_Types_Page, Styles_Page, Species_Catalog, Gallery_Page, Services_Page, and Contact_Page.
2. THE Navigation_Header SHALL display navigation links to the Home_Page, About_Page, Flooring_Types_Page, Styles_Page, Species_Catalog, Gallery_Page, Services_Page, and Contact_Page.
3. THE Navigation_Header SHALL display the Brightwell Floors brand name or logo.
4. THE Navigation_Header SHALL display a CTA linking to the Contact_Page.
5. WHEN a Visitor selects a navigation link, THE Website SHALL display the corresponding page within 2 seconds.
6. IF a Visitor selects a navigation link and the corresponding page fails to load within 2 seconds, THEN THE Website SHALL display an error indication that the page could not be loaded and SHALL keep the Visitor on the current page.
7. WHILE the viewport width is below 768 pixels, THE Navigation_Header SHALL present the navigation links within a toggleable menu control that is collapsed by default.
8. WHEN a Visitor activates the toggleable menu control WHILE the navigation links are hidden, THE Navigation_Header SHALL make all navigation links visible.
9. WHEN a Visitor activates the toggleable menu control WHILE the navigation links are visible, THE Navigation_Header SHALL hide all navigation links.

### Requirement 2: Shared Footer

**User Story:** As a Visitor, I want a consistent footer on every page, so that I can find business details and secondary links.

#### Acceptance Criteria

1. THE Footer SHALL display on the Home_Page, About_Page, Flooring_Types_Page, Styles_Page, Species_Catalog, Gallery_Page, Services_Page, and Contact_Page.
2. THE Footer SHALL display Placeholder_Business_Details including phone, email, address, and service area.
3. THE Footer SHALL display navigation links to the primary pages of the Website.
4. THE Footer SHALL display a CTA linking to the Contact_Page.

### Requirement 3: Home Page

**User Story:** As a Visitor, I want a compelling home page, so that I quickly understand what Brightwell Floors offers and how to request a quote.

#### Acceptance Criteria

1. THE Home_Page SHALL display a hero section containing the tagline "WE WILL NEVER LOSE ON PRICE & WE ALWAYS WIN ON QUALITY".
2. THE Home_Page SHALL display the tagline "Best result 100% guaranteed!".
3. THE Home_Page SHALL display a value-proposition section describing the free design consultation offering.
4. THE Home_Page SHALL display a highlights section summarizing the flooring offerings.
5. THE Home_Page SHALL display a primary CTA linking to the Contact_Page.
6. WHEN a Visitor selects the primary CTA, THE Website SHALL navigate to the Contact_Page.

### Requirement 4: About Page

**User Story:** As a Visitor, I want to learn about the company, so that I can trust Brightwell Floors with my flooring project.

#### Acceptance Criteria

1. THE About_Page SHALL display the company story content.
2. THE About_Page SHALL display the price and quality guarantee messaging including "Best result 100% guaranteed!".
3. THE About_Page SHALL display a description of the free design consultation offering stating that expert design consultants make recommendations at no charge and can show a room with multiple choices to compare.
4. THE About_Page SHALL display a CTA linking to the Contact_Page.

### Requirement 5: Flooring Types Page

**User Story:** As a Visitor, I want to understand the wood flooring categories, so that I can choose the right type for my space.

#### Acceptance Criteria

1. THE Flooring_Types_Page SHALL display a section for solid wood floors describing them as one piece of wood top to bottom, usable on or above ground, and able to be sanded, refinished, and color-changed many times as a lifetime floor.
2. THE Flooring_Types_Page SHALL display a section for engineered wood floors describing them as genuine wood in multiple layers with a higher-quality top layer, expanding and contracting less, ideal for basements, and refinishable approximately four to five times.
3. THE Flooring_Types_Page SHALL display a section for composite engineered wood flooring describing real wood on the wearable surface only with a backing and core made of composites rather than real wood.
4. THE Flooring_Types_Page SHALL display a CTA linking to the Contact_Page.

### Requirement 6: Styles and Options Page

**User Story:** As a Visitor, I want to understand flooring board styles and options, so that I can make choices that suit my taste and room.

#### Acceptance Criteria

1. THE Styles_Page SHALL display a description of strip flooring as boards three inches or less in width that make a room appear smaller.
2. THE Styles_Page SHALL display a description of plank flooring as boards greater than three inches in width that create a larger casual modern look.
3. THE Styles_Page SHALL display a description of parquet flooring as boards that vary in size, form a geometric non-linear look, and have fallen out of favor.
4. THE Styles_Page SHALL display guidance stating that wood floors come in almost any width and that species, color-stain, and width are chosen by taste.
5. THE Styles_Page SHALL display the statement that Red Oak and White Oak make up two-thirds of all wood floors in the USA.

### Requirement 7: Wood Species Catalog

**User Story:** As a Visitor, I want to browse available wood species, so that I can explore options for my flooring.

#### Acceptance Criteria

1. THE Species_Catalog SHALL display the following wood species: Red Oak, White Oak, Ash, Bamboo, Beech, Birch, Brazilian Cherry, Brazilian Maple, Brazilian Walnut, Bubinga, Cherry, Cork, Cumaru, Cypress, Douglas Fir, Hickory Pecan, Iroko, Jarrah, Mahogany, Maple, Merbau, Mesquite, Pine Antique Heart, Pine Southern Yellow, Padauk, Purpleheart, Sapele, Spotted Gum, Sydney Blue Gum, Tasmanian Oak, Teak, Walnut, and Wenge.
2. THE Species_Catalog SHALL present the wood species in a list or grid layout.
3. WHERE an image is available for a wood species, THE Species_Catalog SHALL display the image with descriptive alt text.
4. THE Species_Catalog SHALL display a CTA linking to the Contact_Page.

### Requirement 8: Gallery Page

**User Story:** As a Visitor, I want to view completed flooring projects, so that I can evaluate the quality of the work.

#### Acceptance Criteria

1. THE Gallery_Page SHALL display a collection of flooring project images.
2. THE Gallery_Page SHALL display descriptive alt text for each project image.
3. THE Gallery_Page SHALL display a CTA linking to the Contact_Page.

### Requirement 9: Services and Design Consultation Page

**User Story:** As a Visitor, I want to understand the free design consultation service, so that I know what to expect when I request one.

#### Acceptance Criteria

1. THE Services_Page SHALL display a description of the free design consultation offering stating that expert design consultants make recommendations at no charge.
2. THE Services_Page SHALL display an explanation of the consultation process.
3. THE Services_Page SHALL display a statement that consultants can show a room with multiple choices to compare.
4. THE Services_Page SHALL display a CTA linking to the Contact_Page.

### Requirement 10: Contact and Quote Request Page

**User Story:** As a Visitor, I want to submit a quote or consultation request, so that I can start working with Brightwell Floors.

#### Acceptance Criteria

1. THE Contact_Page SHALL display Placeholder_Business_Details including phone, email, address, and service area.
2. THE Contact_Page SHALL display the Quote_Form with required fields for name, email, and phone, and optional fields for project details and message.
3. WHEN a Visitor submits the Quote_Form with a required field left empty, THE Quote_Form SHALL display a validation message identifying the empty required field, SHALL prevent submission, and SHALL preserve all previously entered input.
4. WHEN a Visitor submits the Quote_Form with an email value that does not match a valid email format, THE Quote_Form SHALL display a validation message identifying the invalid email, SHALL prevent submission, and SHALL preserve all previously entered input.
5. WHEN a Visitor submits the Quote_Form with a phone value that does not match a valid phone format, THE Quote_Form SHALL display a validation message identifying the invalid phone value, SHALL prevent submission, and SHALL preserve all previously entered input.
6. WHEN a Visitor submits the Quote_Form with all required fields populated and valid, THE Quote_Form SHALL display a success confirmation state and SHALL clear the form fields.
7. WHILE the Quote_Form submission is being processed, THE Quote_Form SHALL prevent a duplicate submission.
8. IF the Quote_Form submission fails to complete, THEN THE Quote_Form SHALL display an error indication and SHALL preserve all previously entered input.

### Requirement 11: Responsive Design

**User Story:** As a Visitor, I want the Website to adapt to my device, so that I can browse comfortably on mobile, tablet, or desktop.

#### Acceptance Criteria

1. WHILE the viewport width is below 768 pixels, THE Website SHALL render each page in a single-column mobile layout.
2. WHILE the viewport width is between 768 pixels and 1024 pixels, THE Website SHALL render each page in a tablet layout.
3. WHILE the viewport width is greater than 1024 pixels, THE Website SHALL render each page in a desktop layout.
4. THE Website SHALL display all content and interactive controls without horizontal scrolling at viewport widths of 320 pixels or greater.

### Requirement 12: SEO Fundamentals

**User Story:** As a business owner, I want the Website to follow SEO fundamentals, so that potential customers can find Brightwell Floors through search engines.

#### Acceptance Criteria

1. THE Website SHALL provide a unique page title for each page.
2. THE Website SHALL provide a meta description for each page.
3. THE Website SHALL use semantic HTML elements for page structure, including a single top-level heading per page.

### Requirement 13: Accessibility

**User Story:** As a Visitor using assistive technology, I want the Website to be accessible, so that I can use it regardless of ability.

#### Acceptance Criteria

1. THE Website SHALL provide descriptive alt text for each informative image.
2. THE Website SHALL allow keyboard navigation to reach and activate each interactive control.
3. THE Website SHALL provide a visible focus indicator for each interactive control that receives keyboard focus.
4. THE Website SHALL render text with a contrast ratio of at least 4.5 to 1 against its background for normal-size text.

### Requirement 14: Consistent Brand Styling

**User Story:** As a Visitor, I want a consistent premium look and feel, so that Brightwell Floors appears trustworthy and professional.

#### Acceptance Criteria

1. THE Website SHALL apply the Brand_Theme colors and typography consistently across all pages.
2. THE Website SHALL apply consistent styling to CTA elements across all pages.
3. THE Website SHALL present a premium wood-flooring visual aesthetic through the Brand_Theme.

### Requirement 15: Calls-to-Action

**User Story:** As a business owner, I want clear calls-to-action throughout the Website, so that Visitors are driven toward requesting a quote or consultation.

#### Acceptance Criteria

1. THE Home_Page, About_Page, Flooring_Types_Page, Styles_Page, Species_Catalog, Gallery_Page, and Services_Page SHALL each display at least one CTA linking to the Contact_Page.
2. WHEN a Visitor selects a CTA, THE Website SHALL navigate to the Contact_Page.
