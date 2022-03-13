import React from "react";
import { render } from "@testing-library/react";

import ContactSupportIcon from "./ContactSupportIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <ContactSupportIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<ContactSupportIcon />);
  });
});