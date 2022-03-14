import React from "react";
import { render } from "@testing-library/react";

import HearingDisabledIcon from "./HearingDisabledIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <HearingDisabledIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<HearingDisabledIcon />);
  });
});