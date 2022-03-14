import React from "react"
import { render } from "@testing-library/react"

import SwapCallsIcon from "./SwapCallsIcon"

describe("Typography", () => {
  test("renders the Typography component", () => {
    render(<SwapCallsIcon size={24} rotate={90} color={"yellow-0"} />)
  })

  test("renders the Typography component with default state", () => {
    render(<SwapCallsIcon />)
  })
})
