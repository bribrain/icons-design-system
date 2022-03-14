import React from "react";
import { render } from "@testing-library/react";

import ExplicitIcon from "./ExplicitIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <ExplicitIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<ExplicitIcon />);
  });
});