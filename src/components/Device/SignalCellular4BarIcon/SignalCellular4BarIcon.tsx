import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface ISignalCellular4BarIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function SignalCellular4BarIcon({ size = 24, rotate = 0, color = "grey-100" }: ISignalCellular4BarIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.40999 22.3832H20C21.1 22.3832 22 21.4832 22 20.3832V4.7932C22 3.9032 20.92 3.4532 20.29 4.0832L3.70999 20.6732C3.07999 21.3032 3.51999 22.3832 4.40999 22.3832Z" fill={colorCode} />
    </svg>
  )
}
