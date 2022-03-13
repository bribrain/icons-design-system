import React from "react";
import { render } from "@testing-library/react";

import EjectIcon from "./EjectIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <EjectIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<EjectIcon />);
  });
});