import React from "react";
import { render } from "@testing-library/react";

import StickyNote2Icon from "./StickyNote2Icon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <StickyNote2Icon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<StickyNote2Icon />);
  });
});