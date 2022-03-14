import React from "react";
import { render } from "@testing-library/react";

import AlbumIcon from "./AlbumIcon";

describe("Iconography", () => {
  test("renders the Iconography component", () => {
    render(
      <AlbumIcon size={24} rotate={90} color={"yellow-0"} />
    );
  });

  test("renders the Iconography component with default state", () => {
    render(<AlbumIcon />);
  });
});