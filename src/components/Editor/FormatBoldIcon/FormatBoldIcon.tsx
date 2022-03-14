import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IFormatBoldIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function FormatBoldIcon({ size = 24, rotate = 0, color = "grey-100" }: IFormatBoldIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.6 11.1732C16.57 10.5032 17.25 9.40318 17.25 8.38318C17.25 6.12318 15.5 4.38318 13.25 4.38318H8C7.45 4.38318 7 4.83318 7 5.38318V17.3832C7 17.9332 7.45 18.3832 8 18.3832H13.78C15.85 18.3832 17.74 16.6932 17.75 14.6132C17.76 13.0832 16.9 11.7732 15.6 11.1732ZM10 6.88318H13C13.83 6.88318 14.5 7.55318 14.5 8.38318C14.5 9.21318 13.83 9.88318 13 9.88318H10V6.88318ZM13.5 15.8832H10V12.8832H13.5C14.33 12.8832 15 13.5532 15 14.3832C15 15.2132 14.33 15.8832 13.5 15.8832Z"
        fill={colorCode}
      />
    </svg>
  )
}
