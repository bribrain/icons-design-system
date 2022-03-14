import React from "react";
import { render } from "@testing-library/react";

import WebAssetIcon from "./WebAssetIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <WebAssetIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<WebAssetIcon />);
  });
});