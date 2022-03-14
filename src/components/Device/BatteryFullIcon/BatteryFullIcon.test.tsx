import React from "react"
import { render } from "@testing-library/react"

import BatteryFullIcon from "./BatteryFullIcon"

describe("Typography", () => {
  test("renders the Typography component", () => {
    render(<BatteryFullIcon size={24} rotate={90} color={"yellow-0"} />)
  })

  test("renders the Typography component with default state", () => {
    render(<BatteryFullIcon />)
  })
})
