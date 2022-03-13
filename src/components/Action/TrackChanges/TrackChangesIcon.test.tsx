import React from "react";
import { render } from "@testing-library/react";

import TrackChangesIcon from "./TrackChangesIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <TrackChangesIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<TrackChangesIcon />);
  });
});