import React from "react";
import { render } from "@testing-library/react";

import RoomIcon from "./RoomIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <RoomIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<RoomIcon />);
  });
});