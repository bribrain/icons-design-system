import React from "react"
import { render } from "@testing-library/react"

import PushPinIcon from "./PushPinIcon"

describe("Typography", () => {
  test("renders the Typography component", () => {
    render(<PushPinIcon size={24} rotate={90} color={"yellow-0"} />)
  })

  test("renders the Typography component with default state", () => {
    render(<PushPinIcon />)
  })
})
