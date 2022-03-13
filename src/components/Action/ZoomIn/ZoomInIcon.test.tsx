import React from "react";
import { render } from "@testing-library/react";

import ZoomInIcon from "./ZoomInIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <ZoomInIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<ZoomInIcon />);
  });
});