import React from "react"
import { render } from "@testing-library/react"

import TextFieldsIcon from "./TextFieldsIcon"

describe("Typography", () => {
  test("renders the Typography component", () => {
    render(<TextFieldsIcon size={24} rotate={90} color={"yellow-0"} />)
  })

  test("renders the Typography component with default state", () => {
    render(<TextFieldsIcon />)
  })
})
