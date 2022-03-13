import React from "react";
import { render } from "@testing-library/react";

import AssignmentTurnedInIcon from "./AssignmentTurnedInIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <AssignmentTurnedInIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<AssignmentTurnedInIcon />);
  });
});