import React from "react";
import { render } from "@testing-library/react";

import VoiceOverOffIcon from "./VoiceOverOffIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <VoiceOverOffIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<VoiceOverOffIcon />);
  });
});