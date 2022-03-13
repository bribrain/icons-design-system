import React from "react";
import { render } from "@testing-library/react";

import SwapHorizIcon from "./SwapHorizIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <SwapHorizIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<SwapHorizIcon />);
  });
});