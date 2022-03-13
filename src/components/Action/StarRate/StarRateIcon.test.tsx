import React from "react";
import { render } from "@testing-library/react";

import StarRateIcon from "./StarRateIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <StarRateIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<StarRateIcon />);
  });
});