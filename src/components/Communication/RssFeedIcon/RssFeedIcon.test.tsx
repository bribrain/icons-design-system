import React from "react"
import { render } from "@testing-library/react"

import RssFeedIcon from "./RssFeedIcon"

describe("Typography", () => {
  test("renders the Typography component", () => {
    render(<RssFeedIcon size={24} rotate={90} color={"yellow-0"} />)
  })

  test("renders the Typography component with default state", () => {
    render(<RssFeedIcon />)
  })
})
