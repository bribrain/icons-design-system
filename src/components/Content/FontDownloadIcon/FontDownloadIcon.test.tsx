import React from "react"
import { render } from "@testing-library/react"

import FontDownloadIcon from "./FontDownloadIcon"

describe("Typography", () => {
  test("renders the Typography component", () => {
    render(<FontDownloadIcon size={24} rotate={90} color={"yellow-0"} />)
  })

  test("renders the Typography component with default state", () => {
    render(<FontDownloadIcon />)
  })
})
