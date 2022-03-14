import React from "react";
import { render } from "@testing-library/react";

import ViewArrayIcon from "./ViewArrayIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <ViewArrayIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<ViewArrayIcon />);
  });
});