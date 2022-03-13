import React from "react";
import { render } from "@testing-library/react";

import OnlinePredictionIcon from "./OnlinePredictionIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <OnlinePredictionIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<OnlinePredictionIcon />);
  });
});