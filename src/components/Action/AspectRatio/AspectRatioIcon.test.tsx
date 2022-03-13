import React from "react";
import { render } from "@testing-library/react";

import AspectRatioIcon from "./AspectRatioIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <AspectRatioIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<AspectRatioIcon />);
  });
});