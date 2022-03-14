import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IFormatAlignRightIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function FormatAlignRightIcon({ size = 24, rotate = 0, color = "grey-100" }: IFormatAlignRightIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 21.3832H20C20.55 21.3832 21 20.9332 21 20.3832C21 19.8332 20.55 19.3832 20 19.3832H4C3.45 19.3832 3 19.8332 3 20.3832C3 20.9332 3.45 21.3832 4 21.3832ZM10 17.3832H20C20.55 17.3832 21 16.9332 21 16.3832C21 15.8332 20.55 15.3832 20 15.3832H10C9.45 15.3832 9 15.8332 9 16.3832C9 16.9332 9.45 17.3832 10 17.3832ZM4 13.3832H20C20.55 13.3832 21 12.9332 21 12.3832C21 11.8332 20.55 11.3832 20 11.3832H4C3.45 11.3832 3 11.8332 3 12.3832C3 12.9332 3.45 13.3832 4 13.3832ZM10 9.38318H20C20.55 9.38318 21 8.93318 21 8.38318C21 7.83318 20.55 7.38318 20 7.38318H10C9.45 7.38318 9 7.83318 9 8.38318C9 8.93318 9.45 9.38318 10 9.38318ZM3 4.38318C3 4.93318 3.45 5.38318 4 5.38318H20C20.55 5.38318 21 4.93318 21 4.38318C21 3.83318 20.55 3.38318 20 3.38318H4C3.45 3.38318 3 3.83318 3 4.38318Z"
        fill={colorCode}
      />
    </svg>
  )
}
