import React from "react"
import { render } from "@testing-library/react"

import SpeakerPhoneIcon from "./SpeakerPhoneIcon"

describe("Typography", () => {
  test("renders the Typography component", () => {
    render(<SpeakerPhoneIcon size={24} rotate={90} color={"yellow-0"} />)
  })

  test("renders the Typography component with default state", () => {
    render(<SpeakerPhoneIcon />)
  })
})
