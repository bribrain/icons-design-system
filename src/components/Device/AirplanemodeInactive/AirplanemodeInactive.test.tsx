import React from "react"
import { render } from "@testing-library/react"

import AirplanemodeInactive from "./AirplanemodeInactive"

describe("Typography", () => {
  test("renders the Typography component", () => {
    render(<AirplanemodeInactive size={24} rotate={90} color={"yellow-0"} />)
  })

  test("renders the Typography component with default state", () => {
    render(<AirplanemodeInactive />)
  })
})
