import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IBorderInnerIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function BorderInnerIcon({ size = 24, rotate = 0, color = "grey-100" }: IBorderInnerIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 21.3832H5V19.3832H3V21.3832ZM7 21.3832H9V19.3832H7V21.3832ZM5 7.38318H3V9.38318H5V7.38318ZM3 17.3832H5V15.3832H3V17.3832ZM9 3.38318H7V5.38318H9V3.38318ZM5 3.38318H3V5.38318H5V3.38318ZM17 3.38318H15V5.38318H17V3.38318ZM19 9.38318H21V7.38318H19V9.38318ZM19 3.38318V5.38318H21V3.38318H19ZM15 21.3832H17V19.3832H15V21.3832ZM12 3.38318C11.45 3.38318 11 3.83318 11 4.38318V11.3832H4C3.45 11.3832 3 11.8332 3 12.3832C3 12.9332 3.45 13.3832 4 13.3832H11V20.3832C11 20.9332 11.45 21.3832 12 21.3832C12.55 21.3832 13 20.9332 13 20.3832V13.3832H20C20.55 13.3832 21 12.9332 21 12.3832C21 11.8332 20.55 11.3832 20 11.3832H13V4.38318C13 3.83318 12.55 3.38318 12 3.38318ZM19 21.3832H21V19.3832H19V21.3832ZM19 17.3832H21V15.3832H19V17.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}
