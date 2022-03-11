import React from "react"
import { render } from "@testing-library/react"

import GraphicEqIcon from "./GraphicEqIcon"

describe("Typography", () => {
  test("renders the Typography component", () => {
    render(<GraphicEqIcon size={24} rotate={90} color={"yellow-0"} />)
  })

  test("renders the Typography component with default state", () => {
    render(<GraphicEqIcon />)
  })
})