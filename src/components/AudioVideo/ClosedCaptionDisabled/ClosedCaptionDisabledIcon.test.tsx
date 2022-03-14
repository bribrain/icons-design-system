import React from "react";
import { render } from "@testing-library/react";

import ClosedCaptionDisabledIcon from "./ClosedCaptionDisabledIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <ClosedCaptionDisabledIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<ClosedCaptionDisabledIcon />);
  });
});