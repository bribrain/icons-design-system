import React from "react";
import { render } from "@testing-library/react";

import ReportProblemIcon from "./ReportProblemIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <ReportProblemIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<ReportProblemIcon />);
  });
});