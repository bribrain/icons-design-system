import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IBorderLeftIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function BorderLeftIcon({ size = 24, rotate = 0, color = "grey-100" }: IBorderLeftIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11 21.3832H13V19.3832H11V21.3832ZM11 17.3832H13V15.3832H11V17.3832ZM11 5.38318H13V3.38318H11V5.38318ZM11 9.38318H13V7.38318H11V9.38318ZM11 13.3832H13V11.3832H11V13.3832ZM7 21.3832H9V19.3832H7V21.3832ZM7 5.38318H9V3.38318H7V5.38318ZM7 13.3832H9V11.3832H7V13.3832ZM4 21.3832C4.55 21.3832 5 20.9332 5 20.3832V4.38318C5 3.83318 4.55 3.38318 4 3.38318C3.45 3.38318 3 3.83318 3 4.38318V20.3832C3 20.9332 3.45 21.3832 4 21.3832ZM19 9.38318H21V7.38318H19V9.38318ZM15 21.3832H17V19.3832H15V21.3832ZM19 17.3832H21V15.3832H19V17.3832ZM19 3.38318V5.38318H21V3.38318H19ZM19 13.3832H21V11.3832H19V13.3832ZM19 21.3832H21V19.3832H19V21.3832ZM15 13.3832H17V11.3832H15V13.3832ZM15 5.38318H17V3.38318H15V5.38318Z"
        fill={colorCode}
      />
    </svg>
  )
}
