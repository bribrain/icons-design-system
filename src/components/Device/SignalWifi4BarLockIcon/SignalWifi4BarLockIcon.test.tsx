import React from "react"
import { render } from "@testing-library/react"

import SignalWifi4BarLockIcon from "./SignalWifi4BarLockIcon"

describe("Typography", () => {
  test("renders the Typography component", () => {
    render(<SignalWifi4BarLockIcon size={24} rotate={90} color={"yellow-0"} />)
  })

  test("renders the Typography component with default state", () => {
    render(<SignalWifi4BarLockIcon />)
  })
})
