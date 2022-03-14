import React from "react"
import { render } from "@testing-library/react"

import CallMadeIcon from "./CallMadeIcon"

describe("Typography", () => {
  test("renders the Typography component", () => {
    render(<CallMadeIcon size={24} rotate={90} color={"yellow-0"} />)
  })

  test("renders the Typography component with default state", () => {
    render(<CallMadeIcon />)
  })
})
