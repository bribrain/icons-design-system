import React from "react"
import { render } from "@testing-library/react"

import SignalCellularOffIcon from "./SignalCellularOffIcon"

describe("Typography", () => {
  test("renders the Typography component", () => {
    render(<SignalCellularOffIcon size={24} rotate={90} color={"yellow-0"} />)
  })

  test("renders the Typography component with default state", () => {
    render(<SignalCellularOffIcon />)
  })
})
