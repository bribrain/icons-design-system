import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface INoSimIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function NoSimIcon({ size = 24, rotate = 0, color = "grey-100" }: INoSimIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.08999 4.82318C2.69999 5.21318 2.69999 5.84318 3.08999 6.23318L5.11999 8.26318L4.99999 8.39318V19.3832C4.99999 20.4832 5.89999 21.3832 6.99999 21.3832H17C17.35 21.3832 17.68 21.2832 17.97 21.1232L19.14 22.2932C19.53 22.6832 20.16 22.6832 20.55 22.2932C20.94 21.9032 20.94 21.2732 20.55 20.8832L4.49999 4.82318C4.10999 4.43318 3.47999 4.43318 3.08999 4.82318ZM19 16.4932V5.38318C19 4.28318 18.1 3.38318 17 3.38318H10.01L7.94999 5.44318L19 16.4932Z"
        fill={colorCode}
      />
    </svg>
  )
}
