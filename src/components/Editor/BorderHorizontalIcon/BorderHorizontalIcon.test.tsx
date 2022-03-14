import React from "react"
import { render } from "@testing-library/react"

import BorderHorizontalIcon from "./BorderHorizontalIcon"

describe("Typography", () => {
  test("renders the Typography component", () => {
    render(<BorderHorizontalIcon size={24} rotate={90} color={"yellow-0"} />)
  })

  test("renders the Typography component with default state", () => {
    render(<BorderHorizontalIcon />)
  })
})
