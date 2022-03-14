import React from "react";
import { render } from "@testing-library/react";

import NewReleasesIcon from "./NewReleasesIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <NewReleasesIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<NewReleasesIcon />);
  });
});