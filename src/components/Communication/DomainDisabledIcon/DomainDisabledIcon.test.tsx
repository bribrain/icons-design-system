import React from "react"
import { render } from "@testing-library/react"

import DomainDisabledIcon from "./DomainDisabledIcon"

describe("Typography", () => {
  test("renders the Typography component", () => {
    render(<DomainDisabledIcon size={24} rotate={90} color={"yellow-0"} />)
  })

  test("renders the Typography component with default state", () => {
    render(<DomainDisabledIcon />)
  })
})
