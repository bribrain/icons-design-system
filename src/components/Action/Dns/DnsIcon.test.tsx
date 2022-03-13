import React from "react";
import { render } from "@testing-library/react";

import DnsIcon from "./DnsIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <DnsIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<DnsIcon />);
  });
});