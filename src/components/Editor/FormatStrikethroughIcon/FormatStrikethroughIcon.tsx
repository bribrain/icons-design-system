import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IFormatStrikethroughIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function FormatStrikethroughIcon({ size = 24, rotate = 0, color = "grey-100" }: IFormatStrikethroughIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 19.3832C13.1 19.3832 14 18.4832 14 17.3832V16.3832H10V17.3832C10 18.4832 10.9 19.3832 12 19.3832ZM5 5.88318C5 6.71318 5.67 7.38318 6.5 7.38318H10V10.3832H14V7.38318H17.5C18.33 7.38318 19 6.71318 19 5.88318C19 5.05318 18.33 4.38318 17.5 4.38318H6.5C5.67 4.38318 5 5.05318 5 5.88318ZM4 14.3832H20C20.55 14.3832 21 13.9332 21 13.3832C21 12.8332 20.55 12.3832 20 12.3832H4C3.45 12.3832 3 12.8332 3 13.3832C3 13.9332 3.45 14.3832 4 14.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}
