import React from "react"
import { render } from "@testing-library/react"

import BatteryAlertIcon from "./BatteryAlertIcon"

describe("Typography", () => {
  test("renders the Typography component", () => {
    render(<BatteryAlertIcon size={24} rotate={90} color={"yellow-0"} />)
  })

  test("renders the Typography component with default state", () => {
    render(<BatteryAlertIcon />)
  })
})
