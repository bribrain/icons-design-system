import React from "react";
import { render } from "@testing-library/react";

import RadioIcon from "./RadioIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <RadioIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<RadioIcon />);
  });
});