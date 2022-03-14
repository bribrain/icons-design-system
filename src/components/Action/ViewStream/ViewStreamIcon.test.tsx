import React from "react";
import { render } from "@testing-library/react";

import ViewStreamIcon from "./ViewStreamIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <ViewStreamIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<ViewStreamIcon />);
  });
});