import React from "react";
import { render } from "@testing-library/react";

import MusicVideoIcon from "./MusicVideoIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <MusicVideoIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<MusicVideoIcon />);
  });
});