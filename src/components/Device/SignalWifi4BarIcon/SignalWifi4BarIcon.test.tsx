import React from "react"
import { render } from "@testing-library/react"

import SignalWifi4BarIcon from "./SignalWifi4BarIcon"

describe("Typography", () => {
  test("renders the Typography component", () => {
    render(<SignalWifi4BarIcon size={24} rotate={90} color={"yellow-0"} />)
  })

  test("renders the Typography component with default state", () => {
    render(<SignalWifi4BarIcon />)
  })
})
