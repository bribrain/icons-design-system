import React from "react";
import { render } from "@testing-library/react";

import FeaturedVideoIcon from "./FeaturedVideoIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <FeaturedVideoIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<FeaturedVideoIcon />);
  });
});