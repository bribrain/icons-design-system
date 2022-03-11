import React from "react"
import { render } from "@testing-library/react"

import BrightnessMediumIcon from "./BrightnessMediumIcon"

describe("Typography", () => {
  test("renders the Typography component", () => {
    render(<BrightnessMediumIcon size={24} rotate={90} color={"yellow-0"} />)
  })

  test("renders the Typography component with default state", () => {
    render(<BrightnessMediumIcon />)
  })
})
