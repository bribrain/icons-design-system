import React from "react"
import { render } from "@testing-library/react"

import SignalCellular4BarIcon from "./SignalCellular4BarIcon"

describe("Typography", () => {
  test("renders the Typography component", () => {
    render(<SignalCellular4BarIcon size={24} rotate={90} color={"yellow-0"} />)
  })

  test("renders the Typography component with default state", () => {
    render(<SignalCellular4BarIcon />)
  })
})
