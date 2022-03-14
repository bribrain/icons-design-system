import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IBorderBottomIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function BorderBottomIcon({ size = 24, rotate = 0, color = "grey-100" }: IBorderBottomIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9 11.3832H7V13.3832H9V11.3832ZM13 15.3832H11V17.3832H13V15.3832ZM9 3.38318H7V5.38318H9V3.38318ZM13 11.3832H11V13.3832H13V11.3832ZM5 3.38318H3V5.38318H5V3.38318ZM13 7.38318H11V9.38318H13V7.38318ZM17 11.3832H15V13.3832H17V11.3832ZM13 3.38318H11V5.38318H13V3.38318ZM17 3.38318H15V5.38318H17V3.38318ZM19 13.3832H21V11.3832H19V13.3832ZM19 17.3832H21V15.3832H19V17.3832ZM5 7.38318H3V9.38318H5V7.38318ZM19 3.38318V5.38318H21V3.38318H19ZM19 9.38318H21V7.38318H19V9.38318ZM5 11.3832H3V13.3832H5V11.3832ZM4 21.3832H20C20.55 21.3832 21 20.9332 21 20.3832C21 19.8332 20.55 19.3832 20 19.3832H4C3.45 19.3832 3 19.8332 3 20.3832C3 20.9332 3.45 21.3832 4 21.3832ZM5 15.3832H3V17.3832H5V15.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}
