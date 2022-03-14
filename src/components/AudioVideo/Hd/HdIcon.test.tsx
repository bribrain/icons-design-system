import React from "react";
import { render } from "@testing-library/react";

import HdIcon from "./HdIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <HdIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<HdIcon />);
  });
});