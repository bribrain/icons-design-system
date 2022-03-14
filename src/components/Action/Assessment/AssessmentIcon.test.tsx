import React from "react";
import { render } from "@testing-library/react";

import AssessmentIcon from "./AssessmentIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <AssessmentIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<AssessmentIcon />);
  });
});