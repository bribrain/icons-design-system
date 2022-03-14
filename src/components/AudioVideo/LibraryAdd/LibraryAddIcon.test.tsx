import React from "react";
import { render } from "@testing-library/react";

import LibraryAddIcon from "./LibraryAddIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <LibraryAddIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<LibraryAddIcon />);
  });
});