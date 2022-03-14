import React from "react"
import { render } from "@testing-library/react"

import StrikethroughSIcon from "./StrikethroughSIcon"

describe("Typography", () => {
  test("renders the Typography component", () => {
    render(<StrikethroughSIcon size={24} rotate={90} color={"yellow-0"} />)
  })

  test("renders the Typography component with default state", () => {
    render(<StrikethroughSIcon />)
  })
})
