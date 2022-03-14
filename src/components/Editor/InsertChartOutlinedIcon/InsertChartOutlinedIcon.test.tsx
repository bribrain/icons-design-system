import React from "react"
import { render } from "@testing-library/react"

import InsertChartOutlinedIcon from "./InsertChartOutlinedIcon"

describe("Typography", () => {
  test("renders the Typography component", () => {
    render(<InsertChartOutlinedIcon size={24} rotate={90} color={"yellow-0"} />)
  })

  test("renders the Typography component with default state", () => {
    render(<InsertChartOutlinedIcon />)
  })
})
