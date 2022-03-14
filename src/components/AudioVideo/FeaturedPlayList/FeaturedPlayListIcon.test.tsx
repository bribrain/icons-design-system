import React from "react";
import { render } from "@testing-library/react";

import FeaturedPlayListIcon from "./FeaturedPlayListIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <FeaturedPlayListIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<FeaturedPlayListIcon />);
  });
});