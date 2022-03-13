import React from "react";
import { render } from "@testing-library/react";

import DeleteIcon from "./DeleteIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <DeleteIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<DeleteIcon />);
  });
});