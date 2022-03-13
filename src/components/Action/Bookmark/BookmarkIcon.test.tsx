import React from "react";
import { render } from "@testing-library/react";

import BookmarkIcon from "./BookmarkIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <BookmarkIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<BookmarkIcon />);
  });
});