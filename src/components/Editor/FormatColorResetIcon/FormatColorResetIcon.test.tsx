import React from "react"
import { render } from "@testing-library/react"

import FormatColorResetIcon from "./FormatColorResetIcon"

describe("Typography", () => {
  test("renders the Typography component", () => {
    render(<FormatColorResetIcon size={24} rotate={90} color={"yellow-0"} />)
  })

  test("renders the Typography component with default state", () => {
    render(<FormatColorResetIcon />)
  })
})
