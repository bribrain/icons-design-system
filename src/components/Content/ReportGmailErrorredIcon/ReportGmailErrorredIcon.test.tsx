import React from "react"
import { render } from "@testing-library/react"

import ReportGmailErrorredIcon from "./ReportGmailErrorredIcon"

describe("Typography", () => {
  test("renders the Typography component", () => {
    render(<ReportGmailErrorredIcon size={24} rotate={90} color={"yellow-0"} />)
  })

  test("renders the Typography component with default state", () => {
    render(<ReportGmailErrorredIcon />)
  })
})
