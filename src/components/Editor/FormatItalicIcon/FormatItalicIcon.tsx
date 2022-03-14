import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IFormatItalicIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function FormatItalicIcon({ size = 24, rotate = 0, color = "grey-100" }: IFormatItalicIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 5.88318C10 6.71318 10.67 7.38318 11.5 7.38318H12.21L8.79 15.3832H7.5C6.67 15.3832 6 16.0532 6 16.8832C6 17.7132 6.67 18.3832 7.5 18.3832H12.5C13.33 18.3832 14 17.7132 14 16.8832C14 16.0532 13.33 15.3832 12.5 15.3832H11.79L15.21 7.38318H16.5C17.33 7.38318 18 6.71318 18 5.88318C18 5.05318 17.33 4.38318 16.5 4.38318H11.5C10.67 4.38318 10 5.05318 10 5.88318Z"
        fill={colorCode}
      />
    </svg>
  )
}
