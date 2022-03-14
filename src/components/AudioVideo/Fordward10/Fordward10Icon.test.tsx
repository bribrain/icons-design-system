import React from "react";
import { render } from "@testing-library/react";

import Fordward10Icon from "./Fordward10Icon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <Fordward10Icon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<Fordward10Icon />);
  });
});