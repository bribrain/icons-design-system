import React from "react"
import { render } from "@testing-library/react"

import AttributionIcon from "./AttributionIcon"

describe("Typography", () => {
  test("renders the Typography component", () => {
    render(<AttributionIcon size={24} rotate={90} color={"yellow-0"} />)
  })

  test("renders the Typography component with default state", () => {
    render(<AttributionIcon />)
  })
})
