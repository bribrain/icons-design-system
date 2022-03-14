import React from "react"
import { render } from "@testing-library/react"

import SignalCellularNullIcon from "./SignalCellularNullIcon"

describe("Typography", () => {
  test("renders the Typography component", () => {
    render(<SignalCellularNullIcon size={24} rotate={90} color={"yellow-0"} />)
  })

  test("renders the Typography component with default state", () => {
    render(<SignalCellularNullIcon />)
  })
})
