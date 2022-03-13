import React from "react";
import { render } from "@testing-library/react";

import CloseFullscreenIcon from "./CloseFullscreenIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <CloseFullscreenIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<CloseFullscreenIcon />);
  });
});