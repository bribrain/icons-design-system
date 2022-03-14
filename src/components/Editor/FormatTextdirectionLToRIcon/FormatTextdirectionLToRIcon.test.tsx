import React from "react"
import { render } from "@testing-library/react"

import FormatTextdirectionLToRIcon from "./FormatTextdirectionLToRIcon"

describe("Typography", () => {
  test("renders the Typography component", () => {
    render(<FormatTextdirectionLToRIcon size={24} rotate={90} color={"yellow-0"} />)
  })

  test("renders the Typography component with default state", () => {
    render(<FormatTextdirectionLToRIcon />)
  })
})
