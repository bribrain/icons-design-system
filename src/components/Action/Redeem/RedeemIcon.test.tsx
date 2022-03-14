import React from "react";
import { render } from "@testing-library/react";

import RedeemIcon from "./RedeemIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <RedeemIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<RedeemIcon />);
  });
});