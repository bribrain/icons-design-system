import React from "react";
import { render } from "@testing-library/react";

import ThumbDownIcon from "./ThumbDownIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <ThumbDownIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<ThumbDownIcon />);
  });
});