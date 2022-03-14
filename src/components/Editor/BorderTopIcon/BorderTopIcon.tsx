import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IBorderTopIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function BorderTopIcon({ size = 24, rotate = 0, color = "grey-100" }: IBorderTopIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7 21.3832H9V19.3832H7V21.3832ZM7 13.3832H9V11.3832H7V13.3832ZM11 13.3832H13V11.3832H11V13.3832ZM11 21.3832H13V19.3832H11V21.3832ZM3 17.3832H5V15.3832H3V17.3832ZM3 21.3832H5V19.3832H3V21.3832ZM3 13.3832H5V11.3832H3V13.3832ZM3 9.38318H5V7.38318H3V9.38318ZM11 17.3832H13V15.3832H11V17.3832ZM19 9.38318H21V7.38318H19V9.38318ZM19 13.3832H21V11.3832H19V13.3832ZM3 4.38318C3 4.93318 3.45 5.38318 4 5.38318H20C20.55 5.38318 21 4.93318 21 4.38318C21 3.83318 20.55 3.38318 20 3.38318H4C3.45 3.38318 3 3.83318 3 4.38318ZM19 17.3832H21V15.3832H19V17.3832ZM15 21.3832H17V19.3832H15V21.3832ZM11 9.38318H13V7.38318H11V9.38318ZM19 21.3832H21V19.3832H19V21.3832ZM15 13.3832H17V11.3832H15V13.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}
