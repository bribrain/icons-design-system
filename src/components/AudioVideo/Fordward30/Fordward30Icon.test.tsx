import React from "react";
import { render } from "@testing-library/react";

import Fordward30Icon from "./Fordward30Icon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <Fordward30Icon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<Fordward30Icon />);
  });
});