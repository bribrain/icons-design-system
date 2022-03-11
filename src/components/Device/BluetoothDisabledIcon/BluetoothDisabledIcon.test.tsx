import React from "react"
import { render } from "@testing-library/react"

import BluetoothDisabledIcon from "./BluetoothDisabledIcon"

describe("Typography", () => {
  test("renders the Typography component", () => {
    render(<BluetoothDisabledIcon size={24} rotate={90} color={"yellow-0"} />)
  })

  test("renders the Typography component with default state", () => {
    render(<BluetoothDisabledIcon />)
  })
})
