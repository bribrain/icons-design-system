import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface ISignalCellularOffIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function SignalCellularOffIcon({ size = 24, rotate = 0, color = "grey-100" }: ISignalCellularOffIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21 3.7932C21 2.9032 19.92 2.4532 19.29 3.0832L12.69 9.6832L21 17.9932V3.7932ZM21.44 21.2632L5.61999 5.4432C5.22999 5.0532 4.59999 5.0532 4.20999 5.4432C3.81999 5.8332 3.81999 6.4632 4.20999 6.8532L9.86999 12.5132L2.70999 19.6732C2.07999 20.3032 2.51999 21.3832 3.40999 21.3832H18.73L20.02 22.6732C20.41 23.0632 21.04 23.0632 21.43 22.6732C21.83 22.2832 21.83 21.6532 21.44 21.2632Z"
        fill={colorCode}
      />
    </svg>
  )
}
