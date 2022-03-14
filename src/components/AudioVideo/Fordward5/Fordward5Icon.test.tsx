import React from "react";
import { render } from "@testing-library/react";

import Fordward5Icon from "./Fordward5Icon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <Fordward5Icon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<Fordward5Icon />);
  });
});