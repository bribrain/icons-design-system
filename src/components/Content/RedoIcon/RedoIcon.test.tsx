import React from "react"
import { render } from "@testing-library/react"

import RedoIcon from "./RedoIcon"

describe("Typography", () => {
  test("renders the Typography component", () => {
    render(<RedoIcon size={24} rotate={90} color={"yellow-0"} />)
  })

  test("renders the Typography component with default state", () => {
    render(<RedoIcon />)
  })
})
