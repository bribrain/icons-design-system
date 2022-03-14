import React from "react";
import { render } from "@testing-library/react";

import PregnantWomenIcon from "./PregnantWomenIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <PregnantWomenIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<PregnantWomenIcon />);
  });
});