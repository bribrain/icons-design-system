import React from "react"
import { render } from "@testing-library/react"

import ContactMailIcon from "./ContactMailIcon"

describe("Typography", () => {
  test("renders the Typography component", () => {
    render(<ContactMailIcon size={24} rotate={90} color={"yellow-0"} />)
  })

  test("renders the Typography component with default state", () => {
    render(<ContactMailIcon />)
  })
})
