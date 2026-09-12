import "@testing-library/jest-dom/vitest";
import { expect } from "vitest";
import { toHaveNoViolations } from "jest-axe";

// Register the jest-axe accessibility matcher for use across test suites.
expect.extend(toHaveNoViolations);
