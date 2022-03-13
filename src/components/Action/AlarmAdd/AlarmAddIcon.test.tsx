import React from "react";
import { render } from "@testing-library/react";

import AlarmAddIcon from "./AlarmAddIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <AlarmAddIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<AlarmAddIcon />);
  });
});