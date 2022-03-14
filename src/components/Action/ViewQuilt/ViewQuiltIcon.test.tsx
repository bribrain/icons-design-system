import React from "react";
import { render } from "@testing-library/react";

import ViewQuiltIcon from "./ViewQuiltIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <ViewQuiltIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<ViewQuiltIcon />);
  });
});