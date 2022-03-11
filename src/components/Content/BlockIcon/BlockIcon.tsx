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
        d="M12 2.3833C6.48 2.3833 2 6.8633 2 12.3833C2 17.9033 6.48 22.3833 12 22.3833C17.52 22.3833 22 17.9033 22 12.3833C22 6.8633 17.52 2.3833 12 2.3833ZM4 12.3833C4 7.9633 7.58 4.3833 12 4.3833C13.85 4.3833 15.55 5.0133 16.9 6.0733L5.69 17.2833C4.63 15.9333 4 14.2333 4 12.3833ZM12 20.3833C10.15 20.3833 8.45 19.7533 7.1 18.6933L18.31 7.4833C19.37 8.8333 20 10.5333 20 12.3833C20 16.8033 16.42 20.3833 12 20.3833Z"
        fill={colorCode}
      />
    </svg>
  )
}
