import React from "react";
import { render } from "@testing-library/react";

import Brightness1Icon from "./Brightness1Icon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(<Brightness1Icon size={24} rotate={90} color={"yellow-0"} />);
  });

  test("renders the Iconography component with default state", () => {
    render(<Brightness1Icon />);
  });
});