import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IFormatColorResetIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function FormatColorResetIcon({ size = 24, rotate = 0, color = "grey-100" }: IFormatColorResetIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 14.3832C18 11.2932 14.4 6.50319 12.77 4.51319C12.37 4.02319 11.62 4.02319 11.22 4.51319C10.76 5.08319 10.14 5.87319 9.48998 6.78319L17.93 15.2232C17.97 14.9432 18 14.6632 18 14.3832ZM19.29 19.3932L6.11998 6.22319C5.72998 5.83319 5.09998 5.83319 4.70998 6.22319C4.31998 6.61319 4.31998 7.24319 4.70998 7.63319L7.31998 10.2432C6.54998 11.7132 5.99998 13.1732 5.99998 14.3832C5.99998 17.6932 8.68998 20.3832 12 20.3832C13.52 20.3832 14.9 19.8132 15.95 18.8832L17.87 20.8032C18.26 21.1932 18.89 21.1932 19.28 20.8032C19.68 20.4232 19.68 19.7832 19.29 19.3932Z"
        fill={colorCode}
      />
    </svg>
  )
}
