import React from "react";
import { render } from "@testing-library/react";

import Filter1Icon from "./Filter1Icon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <Filter1Icon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<Filter1Icon />);
  });
});