# Implementation Plan: Brightwell Floors Website

## Overview

This plan implements the Brightwell Floors marketing website with Next.js (App Router, React), Tailwind CSS, and TypeScript. Work proceeds bottom-up: project scaffolding and the Brand Theme first, then typed data and validation modules (with property-based tests via fast-check), then shared UI and layout components, then the eight pages, and finally SEO/accessibility/responsive verification and wiring. Each step builds on prior steps so there is no orphaned code.

Property-based tests use **fast-check** with Vitest, run a **minimum of 100 iterations** each, and are tagged `Feature: brightwell-floors-website, Property {n}: {text}` per the design Testing Strategy.

## Tasks

- [x] 1. Scaffold Next.js + Tailwind + TypeScript project and testing tooling
  - Initialize a Next.js App Router project with TypeScript (`app/` directory, `tsconfig.json`, `next.config.js`)
  - Install and configure Tailwind CSS (`tailwind.config.ts`, `postcss.config.js`) and create `app/globals.css` with Tailwind directives and base styles
  - Install and configure Vitest, `@testing-library/react`, `jest-dom`, `jest-axe`/`axe-core`, and `fast-check`; add test scripts to `package.json`
  - Create the directory structure: `components/{layout,ui,species,gallery,contact}`, `lib/{data,validation,seo}`
  - _Requirements: 11.4, 12.3, 14.1_

- [x] 2. Define the Brand Theme in Tailwind
  - [x] 2.1 Configure Brand Theme tokens in `tailwind.config.ts`
    - Add color tokens (`walnut`, `oak`, `cream`, `charcoal`, `brass`) with the design's hex values
    - Configure display serif and body sans-serif fonts via `next/font` and expose type-scale tokens
    - Add `section` vertical-rhythm spacing tokens and a base focus-ring utility for interactive controls
    - _Requirements: 14.1, 14.2, 14.3, 13.3_

  - [ ]* 2.2 Write contrast check test for Brand Theme token pairings
    - Assert computed contrast ratios for normal-text/background token pairings (e.g. `charcoal` on `cream`, text on `walnut`) are ≥ 4.5:1
    - _Requirements: 13.4_

- [x] 3. Implement typed data modules
  - [x] 3.1 Create navigation data module `lib/data/navigation.ts`
    - Define `NavLink` interface and export `navLinks` with one entry per primary route (`/`, `/about`, `/flooring-types`, `/styles`, `/species`, `/gallery`, `/services`, `/contact`), each with a non-empty label
    - _Requirements: 1.2, 2.3_

  - [ ]* 3.2 Write property test for navigation single source of truth
    - **Property 6: Navigation links are a complete, duplicate-free single source of truth**
    - Tag: `Feature: brightwell-floors-website, Property 6: Navigation links are a complete, duplicate-free single source of truth`; min 100 iterations
    - Assert the list covers all eight routes exactly once, has no duplicate `href`, and every entry has a non-empty `label`
    - **Validates: Requirements 1.2, 2.3**

  - [x] 3.3 Create species data module `lib/data/species.ts`
    - Define `WoodSpecies` interface and export the full ordered list of all 33 species from Requirement 7.1 with unique slug `id`s; include optional `imageSrc`/`alt`
    - _Requirements: 7.1_

  - [ ]* 3.4 Write property test for species catalog completeness and uniqueness
    - **Property 7: Species catalog is complete and unique**
    - Tag: `Feature: brightwell-floors-website, Property 7: Species catalog is complete and unique`; min 100 iterations
    - Assert the set of `name` values equals exactly the required 33 and all `id` values are unique
    - **Validates: Requirements 7.1**

  - [x] 3.5 Create business details module `lib/data/business.ts`
    - Define `BusinessDetails` interface and export placeholder `business` values (phone, email, address, serviceArea)
    - _Requirements: 2.2, 10.1_

  - [x] 3.6 Create gallery data module and `GalleryImage` type
    - Define `GalleryImage` interface (`src`, `alt`, `width`, `height`) and export the project image list with descriptive alt text
    - _Requirements: 8.1, 8.2_

  - [ ]* 3.7 Write property test for image/alt pairing across species and gallery data
    - **Property 8: Every displayed image has descriptive alt text**
    - Tag: `Feature: brightwell-floors-website, Property 8: Every displayed image has descriptive alt text`; min 100 iterations
    - Assert that for any species/gallery entry, a present non-empty image source implies non-empty `alt`
    - **Validates: Requirements 7.3, 8.2, 13.1**

- [x] 4. Implement Quote Form validation module
  - [x] 4.1 Create pure validation functions in `lib/validation/quoteForm.ts`
    - Implement `isEmpty` (trims, all-whitespace counts as empty), `validateEmail`, `validatePhone` (allowed chars + 7–15 digit rule), the `quoteFormSchema`, and `validateQuoteForm` returning a field→message map
    - Define `QuoteFormValues` and `FieldSpec`/`FieldName` types
    - _Requirements: 10.2, 10.3, 10.4, 10.5, 10.6_

  - [ ]* 4.2 Write property test for missing required fields
    - **Property 1: Missing required fields always produce a matching error**
    - Tag: `Feature: brightwell-floors-website, Property 1: Missing required fields always produce a matching error`; min 100 iterations
    - Generate value maps, blank random subsets of required fields (including whitespace-only) → assert errors match exactly those empty required fields and none for non-empty ones
    - **Validates: Requirements 10.2, 10.3**

  - [ ]* 4.3 Write property test for email validation
    - **Property 2: Email validation matches email format**
    - Tag: `Feature: brightwell-floors-website, Property 2: Email validation matches email format`; min 100 iterations
    - Generators for well-formed emails (pass) and malformed strings (fail); assert `validateQuoteForm` includes an `email` error for malformed non-empty emails
    - **Validates: Requirements 10.4**

  - [ ]* 4.4 Write property test for phone validation
    - **Property 3: Phone validation matches phone format**
    - Tag: `Feature: brightwell-floors-website, Property 3: Phone validation matches phone format`; min 100 iterations
    - Generators for phone strings with varying digit counts and separators; pass/fail by the allowed-chars + 7–15 digit rule
    - **Validates: Requirements 10.5**

  - [ ]* 4.5 Write property test for fully valid input
    - **Property 4: Fully valid input produces no errors**
    - Tag: `Feature: brightwell-floors-website, Property 4: Fully valid input produces no errors`; min 100 iterations
    - Generate fully valid maps → assert an empty error map
    - **Validates: Requirements 10.6**

  - [ ]* 4.6 Write property test for validation purity and idempotence
    - **Property 5: Validation is pure and idempotent**
    - Tag: `Feature: brightwell-floors-website, Property 5: Validation is pure and idempotent`; min 100 iterations
    - Assert two calls return deep-equal results and the input `values` is not mutated
    - **Validates: Requirements 10.3, 10.4, 10.5, 10.6**

- [x] 5. Checkpoint - data and validation logic
  - Ensure all tests pass, ask the user if questions arise.

- [x] 6. Implement SEO metadata helper
  - [x] 6.1 Create `lib/seo/metadata.ts`
    - Implement a helper composing unique `title` (with a consistent brand suffix) and `description` for each page using the Next.js Metadata API shape
    - _Requirements: 12.1, 12.2_

- [x] 7. Implement shared UI components
  - [x] 7.1 Implement `CTAButton` in `components/ui/CTAButton.tsx`
    - Styled link defaulting `href` to `/contact`, supporting `primary`/`secondary` variants, consistent CTA styling and visible focus ring
    - _Requirements: 14.2, 15.1, 15.2, 13.3_

  - [x] 7.2 Implement `Section` and `Card` in `components/ui/`
    - `Section`: `w-full` container with max-width, horizontal padding, and vertical rhythm (no horizontal scroll at 320px+)
    - `Card`: reusable image + heading + body presentational block
    - _Requirements: 11.4, 14.1_

  - [x] 7.3 Implement `Hero` in `components/ui/Hero.tsx`
    - Render the single `<h1>` with tagline "WE WILL NEVER LOSE ON PRICE & WE ALWAYS WIN ON QUALITY", the "Best result 100% guaranteed!" tagline, and a primary `CTAButton`
    - _Requirements: 3.1, 3.2, 3.5, 12.3_

  - [ ]* 7.4 Write unit tests for shared UI components
    - Assert `CTAButton` links to `/contact` by default; `Hero` renders the taglines and exactly one `<h1>`; `Section` applies no-overflow container classes
    - _Requirements: 3.1, 3.2, 3.5, 15.1, 15.2_

- [x] 8. Implement layout components and root layout
  - [x] 8.1 Implement `MobileNavToggle` in `components/layout/MobileNavToggle.tsx`
    - `"use client"` `<button>` managing `isOpen`, with `aria-expanded`/`aria-controls="primary-nav"`; toggles link visibility
    - _Requirements: 1.7, 1.8, 1.9, 13.2, 13.3_

  - [x] 8.2 Implement `NavigationHeader` in `components/layout/NavigationHeader.tsx`
    - Server shell rendering brand/logo, nav links from `navLinks` to all eight pages via `<Link>`, a Contact `CTAButton`, and the `MobileNavToggle` child (collapsed below 768px)
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 11.1_

  - [x] 8.3 Implement `Footer` in `components/layout/Footer.tsx`
    - Render placeholder business details (phone, email, address, service area), nav links to primary pages, and a Contact `CTAButton`
    - _Requirements: 2.1, 2.2, 2.3, 2.4_

  - [x] 8.4 Implement root layout `app/layout.tsx` and `app/globals.css` wiring
    - `<html>`/`<body>` with language attribute, fonts, default/template metadata; wrap `NavigationHeader`, `<main>` children, and `Footer` using semantic HTML
    - _Requirements: 1.1, 2.1, 12.3, 14.1_

  - [ ]* 8.5 Write unit tests for layout and mobile nav
    - Assert Header and Footer render links to all eight routes and a Contact CTA; toggle reveals links when hidden and hides them when visible with correct `aria-expanded`
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.7, 1.8, 1.9, 2.1, 2.2, 2.3, 2.4_

- [x] 9. Implement error boundary and loading states
  - [x] 9.1 Create `app/error.tsx` and route `loading.tsx`
    - Error boundary displaying a clear error indication with a `reset()` retry affordance; loading state shown during transitions so visitors are not stranded
    - _Requirements: 1.6_

- [x] 10. Checkpoint - shared components and layout
  - Ensure all tests pass, ask the user if questions arise.

- [x] 11. Implement Home page `app/page.tsx`
  - Render `Hero`, a value-proposition section describing the free design consultation, a highlights section summarizing offerings, and the primary CTA; export unique metadata
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 12.1, 12.2, 12.3, 15.1_

- [x] 12. Implement About page `app/about/page.tsx`
  - Render company story, price/quality guarantee including "Best result 100% guaranteed!", free design consultation description (no-charge expert recommendations, room-with-multiple-choices comparison), and a Contact CTA; export unique metadata
  - _Requirements: 4.1, 4.2, 4.3, 4.4, 12.1, 12.2, 12.3, 15.1_

- [x] 13. Implement Flooring Types page `app/flooring-types/page.tsx`
  - Render sections (using `Card`) for solid, engineered, and composite engineered wood floors with the specified descriptive content, plus a Contact CTA; export unique metadata
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 12.1, 12.2, 12.3, 15.1_

- [x] 14. Implement Styles page `app/styles/page.tsx`
  - Render strip, plank, and parquet descriptions, width/species/color guidance, and the Red/White Oak two-thirds statement, plus a Contact CTA; export unique metadata
  - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 12.1, 12.2, 12.3, 15.1_

- [x] 15. Implement Species catalog
  - [x] 15.1 Implement `SpeciesGrid` in `components/species/SpeciesGrid.tsx`
    - Render `species` data as a responsive grid (1 → 2 → 3/4 columns); render image with alt text when present, else a styled name-only card
    - _Requirements: 7.1, 7.2, 7.3, 11.1, 11.2, 11.3_

  - [x] 15.2 Implement Species page `app/species/page.tsx`
    - Render `SpeciesGrid` with the full catalog and a Contact CTA; export unique metadata
    - _Requirements: 7.1, 7.2, 7.4, 12.1, 12.2, 12.3, 15.1_

- [x] 16. Implement Gallery
  - [x] 16.1 Implement `GalleryGrid` in `components/gallery/GalleryGrid.tsx`
    - Render project images via `next/image` with explicit width/height and descriptive alt text; responsive column count per breakpoint
    - _Requirements: 8.1, 8.2, 11.1, 11.2, 11.3_

  - [x] 16.2 Implement Gallery page `app/gallery/page.tsx`
    - Render `GalleryGrid` and a Contact CTA; export unique metadata
    - _Requirements: 8.1, 8.2, 8.3, 12.1, 12.2, 12.3, 15.1_

- [x] 17. Implement Services page `app/services/page.tsx`
  - Render free consultation description (no-charge expert recommendations), the consultation process explanation, the room-with-multiple-choices statement, and a Contact CTA; export unique metadata
  - _Requirements: 9.1, 9.2, 9.3, 9.4, 12.1, 12.2, 12.3, 15.1_

- [ ]* 18. Write per-page render/SEO unit tests for content pages
  - Assert each content page renders exactly one `<h1>`, unique title/description metadata, and at least one CTA linking to `/contact`
  - _Requirements: 3.5, 4.4, 5.4, 6.5, 7.4, 8.3, 9.4, 12.1, 12.2, 12.3, 15.1_

- [x] 19. Checkpoint - all content pages
  - Ensure all tests pass, ask the user if questions arise.

- [x] 20. Implement Quote Form and Contact page
  - [x] 20.1 Implement `QuoteForm` in `components/contact/QuoteForm.tsx`
    - `"use client"` form with fields per `quoteFormSchema`; on submit run `validateQuoteForm`, block submission and preserve values on errors (with `aria-describedby`/`aria-invalid` and focus to first error); implement placeholder `submitQuote`, `submitting`/`success`/`error` states (disable during submit to prevent duplicates, clear on success, preserve input and announce error via `aria-live`)
    - _Requirements: 10.2, 10.3, 10.4, 10.5, 10.6, 10.7, 10.8, 13.2, 13.3_

  - [x] 20.2 Implement Contact page `app/contact/page.tsx`
    - Render placeholder business details and the `QuoteForm`; export unique metadata
    - _Requirements: 10.1, 10.2, 12.1, 12.2, 12.3_

  - [ ]* 20.3 Write unit tests for QuoteForm state transitions and messages
    - Valid submit → `success` + cleared fields; mocked rejection → `error` + preserved input; submit while `submitting` is a no-op; blank required / malformed email / malformed phone surface field-specific messages and prevent submission
    - _Requirements: 10.3, 10.4, 10.5, 10.6, 10.7, 10.8_

- [ ] 21. Accessibility, contrast, and responsive verification
  - [ ]* 21.1 Write automated accessibility tests for all pages
    - Run `jest-axe`/`axe-core` against rendered pages; assert alt text present, controls are keyboard-focusable with a visible focus indicator, and form labels are associated
    - _Requirements: 13.1, 13.2, 13.3_

  - [ ]* 21.2 Write responsive layout verification tests
    - Render pages at 320px, mobile (<768px), tablet (768–1024px), desktop (>1024px); assert single-column vs multi-column layout, expected grid column counts, and no horizontal overflow at 320px+
    - _Requirements: 11.1, 11.2, 11.3, 11.4_

- [x] 22. Final checkpoint - full site
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional (tests) and can be skipped for a faster MVP; core implementation tasks are never optional.
- Each task references specific granular requirements for traceability.
- Property-based tests (fast-check) validate the 8 correctness properties, each tagged `Feature: brightwell-floors-website, Property {n}: {text}` and running a minimum of 100 iterations.
- Unit, accessibility/contrast, and responsive tests complement the property tests per the design Testing Strategy.
- Checkpoints ensure incremental validation at natural breaks.

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1"] },
    { "id": 1, "tasks": ["2.1", "3.1", "3.3", "3.5", "3.6", "4.1", "6.1"] },
    { "id": 2, "tasks": ["2.2", "3.2", "3.4", "3.7", "4.2", "4.3", "4.4", "4.5", "4.6", "7.1", "7.2", "7.3", "8.1", "9.1"] },
    { "id": 3, "tasks": ["7.4", "8.2", "8.3", "8.4", "15.1", "16.1", "20.1"] },
    { "id": 4, "tasks": ["8.5", "11", "12", "13", "14", "15.2", "16.2", "17", "20.2"] },
    { "id": 5, "tasks": ["18", "20.3", "21.1", "21.2"] }
  ]
}
```
