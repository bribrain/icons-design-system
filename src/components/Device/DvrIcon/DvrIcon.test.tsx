import React from "react"
import { render } from "@testing-library/react"

import DvrIcon from "./DvrIcon"

describe("Typography", () => {
  test("renders the Typography component", () => {
    render(<DvrIcon size={24} rotate={90} color={"yellow-0"} />)
  })

  test("renders the Typography component with default state", () => {
    render(<DvrIcon />)
  })
})
