import React from "react"
import { render } from "@testing-library/react"

import CallIcon from "./CallIcon"

describe("Typography", () => {
  test("renders the Typography component", () => {
    render(<CallIcon size={24} rotate={90} color={"yellow-0"} />)
  })

  test("renders the Typography component with default state", () => {
    render(<CallIcon />)
  })
})
