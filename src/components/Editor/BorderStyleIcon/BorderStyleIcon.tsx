import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IBorderStyleIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function BorderStyleIcon({ size = 24, rotate = 0, color = "grey-100" }: IBorderStyleIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15 21.3832H17V19.3832H15V21.3832ZM19 21.3832H21V19.3832H19V21.3832ZM7 21.3832H9V19.3832H7V21.3832ZM11 21.3832H13V19.3832H11V21.3832ZM19 17.3832H21V15.3832H19V17.3832ZM19 13.3832H21V11.3832H19V13.3832ZM3 5.38318V20.3832C3 20.9332 3.45 21.3832 4 21.3832C4.55 21.3832 5 20.9332 5 20.3832V6.38318C5 5.83318 5.45 5.38318 6 5.38318H20C20.55 5.38318 21 4.93318 21 4.38318C21 3.83318 20.55 3.38318 20 3.38318H5C3.9 3.38318 3 4.28318 3 5.38318ZM19 9.38318H21V7.38318H19V9.38318Z"
        fill={colorCode}
      />
    </svg>
  )
}
