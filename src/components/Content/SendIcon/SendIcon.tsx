import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface ISendIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function SendIcon({ size = 24, rotate = 0, color = "grey-100" }: ISendIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.4 20.7833L20.85 13.3033C21.66 12.9533 21.66 11.8133 20.85 11.4633L3.4 3.98332C2.74 3.69332 2.01 4.18332 2.01 4.89332L2 9.50332C2 10.0033 2.37 10.4333 2.87 10.4933L17 12.3833L2.87 14.2633C2.37 14.3333 2 14.7633 2 15.2633L2.01 19.8733C2.01 20.5833 2.74 21.0733 3.4 20.7833Z"
        fill={colorCode}
      />
    </svg>
  )
}
