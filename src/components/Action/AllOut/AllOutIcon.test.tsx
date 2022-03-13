import React from "react";
import { render } from "@testing-library/react";

import AllOutIcon from "./AllOutIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <AllOutIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<AllOutIcon />);
  });
});