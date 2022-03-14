import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IFormatPaintIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function FormatPaintIcon({ size = 24, rotate = 0, color = "grey-100" }: IFormatPaintIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 4.38318V3.38318C18 2.83318 17.55 2.38318 17 2.38318H5C4.45 2.38318 4 2.83318 4 3.38318V7.38318C4 7.93318 4.45 8.38318 5 8.38318H17C17.55 8.38318 18 7.93318 18 7.38318V6.38318H19V10.3832H10C9.45 10.3832 9 10.8332 9 11.3832V21.3832C9 21.9332 9.45 22.3832 10 22.3832H12C12.55 22.3832 13 21.9332 13 21.3832V12.3832H20C20.55 12.3832 21 11.9332 21 11.3832V5.38318C21 4.83318 20.55 4.38318 20 4.38318H18Z"
        fill={colorCode}
      />
    </svg>
  )
}
