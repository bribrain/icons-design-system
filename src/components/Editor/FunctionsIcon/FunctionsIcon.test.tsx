import React from "react"
import { render } from "@testing-library/react"

import FunctionsIcon from "./FunctionsIcon"

describe("Typography", () => {
  test("renders the Typography component", () => {
    render(<FunctionsIcon size={24} rotate={90} color={"yellow-0"} />)
  })

  test("renders the Typography component with default state", () => {
    render(<FunctionsIcon />)
  })
})
