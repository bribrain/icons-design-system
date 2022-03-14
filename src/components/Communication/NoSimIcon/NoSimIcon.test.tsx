import React from "react"
import { render } from "@testing-library/react"

import NoSimIcon from "./NoSimIcon"

describe("Typography", () => {
  test("renders the Typography component", () => {
    render(<NoSimIcon size={24} rotate={90} color={"yellow-0"} />)
  })

  test("renders the Typography component with default state", () => {
    render(<NoSimIcon />)
  })
})
