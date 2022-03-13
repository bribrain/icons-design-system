import React from "react";
import { render } from "@testing-library/react";

import GradeIcon from "./GradeIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <GradeIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<GradeIcon />);
  });
});