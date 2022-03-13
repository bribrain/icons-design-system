import React from "react";
import { render } from "@testing-library/react";

import TextRotateUpIcon from "./TextRotateUpIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <TextRotateUpIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<TextRotateUpIcon />);
  });
});