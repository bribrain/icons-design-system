import React from "react"
import { render } from "@testing-library/react"

import MarkUnreadIcon from "./MarkUnreadIcon"

describe("Typography", () => {
  test("renders the Typography component", () => {
    render(<MarkUnreadIcon size={24} rotate={90} color={"yellow-0"} />)
  })

  test("renders the Typography component with default state", () => {
    render(<MarkUnreadIcon />)
  })
})
