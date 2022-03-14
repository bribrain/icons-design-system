import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IBorderAllIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function BorderAllIcon({ size = 24, rotate = 0, color = "grey-100" }: IBorderAllIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 5.38318V19.3832C3 20.4832 3.9 21.3832 5 21.3832H19C20.1 21.3832 21 20.4832 21 19.3832V5.38318C21 4.28318 20.1 3.38318 19 3.38318H5C3.9 3.38318 3 4.28318 3 5.38318ZM11 19.3832H6C5.45 19.3832 5 18.9332 5 18.3832V13.3832H10C10.55 13.3832 11 13.8332 11 14.3832V19.3832ZM10 11.3832H5V6.38318C5 5.83318 5.45 5.38318 6 5.38318H11V10.3832C11 10.9332 10.55 11.3832 10 11.3832ZM18 19.3832H13V14.3832C13 13.8332 13.45 13.3832 14 13.3832H19V18.3832C19 18.9332 18.55 19.3832 18 19.3832ZM19 11.3832H14C13.45 11.3832 13 10.9332 13 10.3832V5.38318H18C18.55 5.38318 19 5.83318 19 6.38318V11.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}
