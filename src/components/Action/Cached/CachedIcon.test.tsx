import React from "react";
import { render } from "@testing-library/react";

import CachedIcon from "./CachedIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <CachedIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<CachedIcon />);
  });
});