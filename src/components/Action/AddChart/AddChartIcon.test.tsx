import React from "react";
import { render } from "@testing-library/react";

import AddChartIcon from "./AddChartIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <AddChartIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<AddChartIcon />);
  });
});