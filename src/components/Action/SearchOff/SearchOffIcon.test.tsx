import React from "react";
import { render } from "@testing-library/react";

import SearchOffIcon from "./SearchOffIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <SearchOffIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<SearchOffIcon />);
  });
});