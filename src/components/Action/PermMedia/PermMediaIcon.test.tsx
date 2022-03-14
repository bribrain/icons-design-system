import React from "react";
import { render } from "@testing-library/react";

import PermMediaIcon from "./PermMediaIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <PermMediaIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<PermMediaIcon />);
  });
});