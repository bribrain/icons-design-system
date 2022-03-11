import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IBrowserNotSupportedIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function BrowserNotSupportedIcon({ size = 24, rotate = 0, color = "black" }: IBrowserNotSupportedIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19 3.3833H5C3.89 3.3833 3 4.2833 3 5.3833V19.3833C3 20.4833 3.89 21.3833 5 21.3833H19C20.1 21.3833 21 20.4833 21 19.3833V5.3833C21 4.2833 20.1 3.3833 19 3.3833ZM16 13.3833H13V16.3833C13 16.9333 12.55 17.3833 12 17.3833C11.45 17.3833 11 16.9333 11 16.3833V13.3833H8C7.45 13.3833 7 12.9333 7 12.3833C7 11.8333 7.45 11.3833 8 11.3833H11V8.3833C11 7.8333 11.45 7.3833 12 7.3833C12.55 7.3833 13 7.8333 13 8.3833V11.3833H16C16.55 11.3833 17 11.8333 17 12.3833C17 12.9333 16.55 13.3833 16 13.3833Z"
        fill={colorCode}
      />
    </svg>
  )
}
