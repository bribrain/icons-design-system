import React from "react";
import { render } from "@testing-library/react";

import NotStartedIcon from "./NotStartedIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <NotStartedIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<NotStartedIcon />);
  });
});