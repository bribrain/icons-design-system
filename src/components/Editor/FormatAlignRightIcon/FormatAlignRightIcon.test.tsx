import React from "react"
import { render } from "@testing-library/react"

import FormatAlignRightIcon from "./FormatAlignRightIcon"

describe("Typography", () => {
  test("renders the Typography component", () => {
    render(<FormatAlignRightIcon size={24} rotate={90} color={"yellow-0"} />)
  })

  test("renders the Typography component with default state", () => {
    render(<FormatAlignRightIcon />)
  })
})
