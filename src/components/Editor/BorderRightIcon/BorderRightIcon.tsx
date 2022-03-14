import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IBorderRightIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function BorderRightIcon({ size = 24, rotate = 0, color = "grey-100" }: IBorderRightIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7 21.3832H9V19.3832H7V21.3832ZM3 5.38318H5V3.38318H3V5.38318ZM7 5.38318H9V3.38318H7V5.38318ZM7 13.3832H9V11.3832H7V13.3832ZM3 21.3832H5V19.3832H3V21.3832ZM11 21.3832H13V19.3832H11V21.3832ZM3 13.3832H5V11.3832H3V13.3832ZM3 17.3832H5V15.3832H3V17.3832ZM3 9.38318H5V7.38318H3V9.38318ZM11 17.3832H13V15.3832H11V17.3832ZM15 13.3832H17V11.3832H15V13.3832ZM19 4.38318V20.3832C19 20.9332 19.45 21.3832 20 21.3832C20.55 21.3832 21 20.9332 21 20.3832V4.38318C21 3.83318 20.55 3.38318 20 3.38318C19.45 3.38318 19 3.83318 19 4.38318ZM15 21.3832H17V19.3832H15V21.3832ZM15 5.38318H17V3.38318H15V5.38318ZM11 13.3832H13V11.3832H11V13.3832ZM11 5.38318H13V3.38318H11V5.38318ZM11 9.38318H13V7.38318H11V9.38318Z"
        fill={colorCode}
      />
    </svg>
  )
}
