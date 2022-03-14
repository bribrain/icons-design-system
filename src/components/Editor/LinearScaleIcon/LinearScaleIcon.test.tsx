import React from "react"
import { render } from "@testing-library/react"

import LinearScaleIcon from "./LinearScaleIcon"

describe("Typography", () => {
  test("renders the Typography component", () => {
    render(<LinearScaleIcon size={24} rotate={90} color={"yellow-0"} />)
  })

  test("renders the Typography component with default state", () => {
    render(<LinearScaleIcon />)
  })
})
