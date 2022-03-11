import React from "react"
import { render } from "@testing-library/react"

import ClearIcon from "./ClearIcon"

describe("Typography", () => {
  test("renders the Typography component", () => {
    render(<ClearIcon size={24} rotate={90} color={"yellow-0"} />)
  })

  test("renders the Typography component with default state", () => {
    render(<ClearIcon />)
  })
})
