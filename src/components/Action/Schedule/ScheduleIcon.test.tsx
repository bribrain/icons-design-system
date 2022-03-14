import React from "react";
import { render } from "@testing-library/react";

import ScheduleIcon from "./ScheduleIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <ScheduleIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<ScheduleIcon />);
  });
});