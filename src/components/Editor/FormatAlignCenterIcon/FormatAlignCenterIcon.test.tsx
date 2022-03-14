import React from "react"
import { render } from "@testing-library/react"

import FormatAlignCenterIcon from "./FormatAlignCenterIcon"

describe("Typography", () => {
  test("renders the Typography component", () => {
    render(<FormatAlignCenterIcon size={24} rotate={90} color={"yellow-0"} />)
  })

  test("renders the Typography component with default state", () => {
    render(<FormatAlignCenterIcon />)
  })
})
