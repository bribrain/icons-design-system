import React from "react";
import { render } from "@testing-library/react";

import RemoveShoppingCartIcon from "./RemoveShoppingCartIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <RemoveShoppingCartIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<RemoveShoppingCartIcon />);
  });
});