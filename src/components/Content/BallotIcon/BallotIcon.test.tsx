import React from "react"
import { render } from "@testing-library/react"

import BallotIcon from "./BallotIcon"

describe("Typography", () => {
  test("renders the Typography component", () => {
    render(<BallotIcon size={24} rotate={90} color={"yellow-0"} />)
  })

  test("renders the Typography component with default state", () => {
    render(<BallotIcon />)
  })
})
