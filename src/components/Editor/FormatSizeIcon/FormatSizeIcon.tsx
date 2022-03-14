import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IFormatSizeIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function FormatSizeIcon({ size = 24, rotate = 0, color = "grey-100" }: IFormatSizeIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9 5.88318C9 6.71318 9.67 7.38318 10.5 7.38318H14V17.8832C14 18.7132 14.67 19.3832 15.5 19.3832C16.33 19.3832 17 18.7132 17 17.8832V7.38318H20.5C21.33 7.38318 22 6.71318 22 5.88318C22 5.05318 21.33 4.38318 20.5 4.38318H10.5C9.67 4.38318 9 5.05318 9 5.88318ZM4.5 12.3832H6V17.8832C6 18.7132 6.67 19.3832 7.5 19.3832C8.33 19.3832 9 18.7132 9 17.8832V12.3832H10.5C11.33 12.3832 12 11.7132 12 10.8832C12 10.0532 11.33 9.38318 10.5 9.38318H4.5C3.67 9.38318 3 10.0532 3 10.8832C3 11.7132 3.67 12.3832 4.5 12.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}
