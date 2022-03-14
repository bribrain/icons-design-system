import React from "react";
import { render } from "@testing-library/react";

import FiveGIcon from "./5GIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <FiveGIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<FiveGIcon />);
  });
});