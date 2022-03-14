import React from "react"
import { render } from "@testing-library/react"

import SignalCellularConnectedNoInternet4BarIcon from "./SignalCellularConnectedNoInternet4BarIcon"

describe("Typography", () => {
  test("renders the Typography component", () => {
    render(<SignalCellularConnectedNoInternet4BarIcon size={24} rotate={90} color={"yellow-0"} />)
  })

  test("renders the Typography component with default state", () => {
    render(<SignalCellularConnectedNoInternet4BarIcon />)
  })
})
