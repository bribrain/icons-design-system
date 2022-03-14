import React from "react";
import { render } from "@testing-library/react";

import AccessibilityNewIcon from "./AccessibilityNewIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <AccessibilityNewIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<AccessibilityNewIcon />);
  });
});