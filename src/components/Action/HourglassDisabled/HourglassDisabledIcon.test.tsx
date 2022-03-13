import React from "react";
import { render } from "@testing-library/react";

import HourglassDisabledIcon from "./HourglassDisabledIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <HourglassDisabledIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<HourglassDisabledIcon />);
  });
});