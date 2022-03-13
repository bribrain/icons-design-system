import React from "react";
import { render } from "@testing-library/react";

import AdminPanelSettingsIcon from "./AdminPanelSettingsIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <AdminPanelSettingsIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<AdminPanelSettingsIcon />);
  });
});