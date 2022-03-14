import React from "react"
import { render } from "@testing-library/react"

import PieChartIcon from "./PieChartIcon"

describe("Typography", () => {
  test("renders the Typography component", () => {
    render(<PieChartIcon size={24} rotate={90} color={"yellow-0"} />)
  })

  test("renders the Typography component with default state", () => {
    render(<PieChartIcon />)
  })
})
