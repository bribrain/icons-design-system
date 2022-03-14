import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IShortTextIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function ShortTextIcon({ size = 24, rotate = 0, color = "grey-100" }: IShortTextIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 9.38318H19C19.55 9.38318 20 9.83318 20 10.3832C20 10.9332 19.55 11.3832 19 11.3832H5C4.45 11.3832 4 10.9332 4 10.3832C4 9.83318 4.45 9.38318 5 9.38318ZM5 13.3832H13C13.55 13.3832 14 13.8332 14 14.3832C14 14.9332 13.55 15.3832 13 15.3832H5C4.45 15.3832 4 14.9332 4 14.3832C4 13.8332 4.45 13.3832 5 13.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}
