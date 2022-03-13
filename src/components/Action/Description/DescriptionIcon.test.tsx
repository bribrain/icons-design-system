import React from "react";
import { render } from "@testing-library/react";

import DescriptionIcon from "./DescriptionIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <DescriptionIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<DescriptionIcon />);
  });
});