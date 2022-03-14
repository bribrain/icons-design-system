import React from "react";
import { render } from "@testing-library/react";

import Reply10Icon from "./Reply10Icon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <Reply10Icon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<Reply10Icon />);
  });
});