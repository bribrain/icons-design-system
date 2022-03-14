import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IBorderVerticalIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function BorderVerticalIcon({ size = 24, rotate = 0, color = "grey-100" }: IBorderVerticalIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 9.38318H5V7.38318H3V9.38318ZM3 5.38318H5V3.38318H3V5.38318ZM7 21.3832H9V19.3832H7V21.3832ZM7 13.3832H9V11.3832H7V13.3832ZM3 13.3832H5V11.3832H3V13.3832ZM3 21.3832H5V19.3832H3V21.3832ZM3 17.3832H5V15.3832H3V17.3832ZM7 5.38318H9V3.38318H7V5.38318ZM19 17.3832H21V15.3832H19V17.3832ZM12 21.3832C12.55 21.3832 13 20.9332 13 20.3832V4.38318C13 3.83318 12.55 3.38318 12 3.38318C11.45 3.38318 11 3.83318 11 4.38318V20.3832C11 20.9332 11.45 21.3832 12 21.3832ZM19 21.3832H21V19.3832H19V21.3832ZM19 13.3832H21V11.3832H19V13.3832ZM19 3.38318V5.38318H21V3.38318H19ZM19 9.38318H21V7.38318H19V9.38318ZM15 5.38318H17V3.38318H15V5.38318ZM15 21.3832H17V19.3832H15V21.3832ZM15 13.3832H17V11.3832H15V13.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}
