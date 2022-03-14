import React from "react"
import { render } from "@testing-library/react"

import AlternateEmailIcon from "./AlternateEmailIcon"

describe("Typography", () => {
  test("renders the Typography component", () => {
    render(<AlternateEmailIcon size={24} rotate={90} color={"yellow-0"} />)
  })

  test("renders the Typography component with default state", () => {
    render(<AlternateEmailIcon />)
  })
})
