import React from "react"
import { render } from "@testing-library/react"

import InsertDriveFileIcon from "./InsertDriveFileIcon"

describe("Typography", () => {
  test("renders the Typography component", () => {
    render(<InsertDriveFileIcon size={24} rotate={90} color={"yellow-0"} />)
  })

  test("renders the Typography component with default state", () => {
    render(<InsertDriveFileIcon />)
  })
})
