import React from "react";
import { render } from "@testing-library/react";

import FastRewindIcon from "./FastRewindIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <FastRewindIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<FastRewindIcon />);
  });
});