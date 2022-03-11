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
        d="M14 9.8833H17C17.55 9.8833 18 9.4333 18 8.8833C18 8.3333 17.55 7.8833 17 7.8833H14C13.45 7.8833 13 8.3333 13 8.8833C13 9.4333 13.45 9.8833 14 9.8833ZM14 16.8833H17C17.55 16.8833 18 16.4333 18 15.8833C18 15.3333 17.55 14.8833 17 14.8833H14C13.45 14.8833 13 15.3333 13 15.8833C13 16.4333 13.45 16.8833 14 16.8833ZM19 21.3833H5C3.9 21.3833 3 20.4833 3 19.3833V5.3833C3 4.2833 3.9 3.3833 5 3.3833H19C20.1 3.3833 21 4.2833 21 5.3833V19.3833C21 20.4833 20.1 21.3833 19 21.3833ZM7 11.3833H10C10.55 11.3833 11 10.9333 11 10.3833V7.3833C11 6.8333 10.55 6.3833 10 6.3833H7C6.45 6.3833 6 6.8333 6 7.3833V10.3833C6 10.9333 6.45 11.3833 7 11.3833ZM7 7.3833H10V10.3833H7V7.3833ZM7 18.3833H10C10.55 18.3833 11 17.9333 11 17.3833V14.3833C11 13.8333 10.55 13.3833 10 13.3833H7C6.45 13.3833 6 13.8333 6 14.3833V17.3833C6 17.9333 6.45 18.3833 7 18.3833ZM7 14.3833H10V17.3833H7V14.3833Z"
        fill={colorCode}
      />
    </svg>
  )
}
