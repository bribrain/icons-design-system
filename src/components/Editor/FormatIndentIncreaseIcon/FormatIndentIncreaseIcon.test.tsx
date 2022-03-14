import React from "react"
import { render } from "@testing-library/react"

import FormatIndentIncreaseIcon from "./FormatIndentIncreaseIcon"

describe("Typography", () => {
  test("renders the Typography component", () => {
    render(<FormatIndentIncreaseIcon size={24} rotate={90} color={"yellow-0"} />)
  })

  test("renders the Typography component with default state", () => {
    render(<FormatIndentIncreaseIcon />)
  })
})
