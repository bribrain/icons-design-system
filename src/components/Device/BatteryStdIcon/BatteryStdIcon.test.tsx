import React from "react"
import { render } from "@testing-library/react"

import BatteryStdIcon from "./BatteryStdIcon"

describe("Typography", () => {
  test("renders the Typography component", () => {
    render(<BatteryStdIcon size={24} rotate={90} color={"yellow-0"} />)
  })

  test("renders the Typography component with default state", () => {
    render(<BatteryStdIcon />)
  })
})
