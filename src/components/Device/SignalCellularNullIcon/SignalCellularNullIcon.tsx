import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface ISignalCellularNullIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function SignalCellularNullIcon({ size = 24, rotate = 0, color = "grey-100" }: ISignalCellularNullIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 7.21323V19.3832C20 19.9332 19.55 20.3832 19 20.3832H6.82999L20 7.21323ZM20.29 4.09323L3.70999 20.6732C3.07999 21.3032 3.51999 22.3832 4.40999 22.3832H20C21.1 22.3832 22 21.4832 22 20.3832V4.79323C22 3.90323 20.92 3.46323 20.29 4.09323Z"
        fill={colorCode}
      />
    </svg>
  )
}
