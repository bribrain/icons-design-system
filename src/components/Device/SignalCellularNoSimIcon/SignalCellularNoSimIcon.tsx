import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface ISignalCellularNoSimIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function SignalCellularNoSimIcon({ size = 24, rotate = 0, color = "grey-100" }: ISignalCellularNoSimIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19 5.38318C19 4.28318 18.1 3.38318 17 3.38318H10.83C10.3 3.38318 9.78999 3.59318 9.40999 3.97318L7.94999 5.44318L19 16.4932V5.38318ZM3.08999 4.82318C2.69999 5.21318 2.69999 5.84318 3.08999 6.23318L4.99999 8.16318V19.3832C4.99999 20.4932 5.89999 21.3832 6.99999 21.3832H18.23L19.14 22.2932C19.53 22.6832 20.16 22.6832 20.55 22.2932C20.94 21.9032 20.94 21.2732 20.55 20.8832L4.49999 4.82318C4.10999 4.43318 3.47999 4.43318 3.08999 4.82318Z"
        fill={colorCode}
      />
    </svg>
  )
}
