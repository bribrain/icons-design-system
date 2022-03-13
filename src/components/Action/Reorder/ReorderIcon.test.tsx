import React from "react";
import { render } from "@testing-library/react";

import ReorderIcon from "./ReorderIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <ReorderIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<ReorderIcon />);
  });
});