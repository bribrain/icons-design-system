import React from "react"
import { render } from "@testing-library/react"

import WrapTextIcon from "./WrapTextIcon"

describe("Typography", () => {
  test("renders the Typography component", () => {
    render(<WrapTextIcon size={24} rotate={90} color={"yellow-0"} />)
  })

  test("renders the Typography component with default state", () => {
    render(<WrapTextIcon />)
  })
})
