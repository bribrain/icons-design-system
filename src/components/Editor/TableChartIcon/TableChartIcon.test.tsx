import React from "react"
import { render } from "@testing-library/react"

import TableChartIcon from "./TableChartIcon"

describe("Typography", () => {
  test("renders the Typography component", () => {
    render(<TableChartIcon size={24} rotate={90} color={"yellow-0"} />)
  })

  test("renders the Typography component with default state", () => {
    render(<TableChartIcon />)
  })
})
