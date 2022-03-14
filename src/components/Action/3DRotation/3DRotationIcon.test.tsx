import React from "react";
import { render } from "@testing-library/react";

import ThreeDRotationIcon from "./3DRotationIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <ThreeDRotationIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<ThreeDRotationIcon />);
  });
});