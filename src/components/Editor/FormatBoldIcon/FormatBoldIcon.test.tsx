import React from "react"
import { render } from "@testing-library/react"

import FormatBoldIcon from "./FormatBoldIcon"

describe("Typography", () => {
  test("renders the Typography component", () => {
    render(<FormatBoldIcon size={24} rotate={90} color={"yellow-0"} />)
  })

  test("renders the Typography component with default state", () => {
    render(<FormatBoldIcon />)
  })
})
