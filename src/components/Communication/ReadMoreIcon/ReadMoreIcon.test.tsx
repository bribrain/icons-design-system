import React from "react"
import { render } from "@testing-library/react"

import ReadMoreIcon from "./ReadMoreIcon"

describe("Typography", () => {
  test("renders the Typography component", () => {
    render(<ReadMoreIcon size={24} rotate={90} color={"yellow-0"} />)
  })

  test("renders the Typography component with default state", () => {
    render(<ReadMoreIcon />)
  })
})
