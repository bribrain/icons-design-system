import React from "react";
import { render } from "@testing-library/react";

import FiberSmartRecordIcon from "./FiberSmartRecordIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <FiberSmartRecordIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<FiberSmartRecordIcon />);
  });
});