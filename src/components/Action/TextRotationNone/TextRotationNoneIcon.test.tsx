import React from "react";
import { render } from "@testing-library/react";

import TextRotationNoneIcon from "./TextRotationNoneIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <TextRotationNoneIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<TextRotationNoneIcon />);
  });
});