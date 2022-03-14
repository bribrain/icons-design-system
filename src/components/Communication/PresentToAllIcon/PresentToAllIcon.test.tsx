import React from "react"
import { render } from "@testing-library/react"

import PresentToAllIcon from "./PresentToAllIcon"

describe("Typography", () => {
  test("renders the Typography component", () => {
    render(<PresentToAllIcon size={24} rotate={90} color={"yellow-0"} />)
  })

  test("renders the Typography component with default state", () => {
    render(<PresentToAllIcon />)
  })
})
