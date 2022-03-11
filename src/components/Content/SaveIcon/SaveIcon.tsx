import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface ISaveIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function SaveIcon({ size = 24, rotate = 0, color = "grey-100" }: ISaveIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.59 3.9733C17.21 3.5933 16.7 3.3833 16.17 3.3833H5C3.89 3.3833 3 4.2833 3 5.3833V19.3833C3 20.4833 3.9 21.3833 5 21.3833H19C20.1 21.3833 21 20.4833 21 19.3833V8.2133C21 7.6833 20.79 7.1733 20.41 6.8033L17.59 3.9733ZM12 19.3833C10.34 19.3833 9 18.0433 9 16.3833C9 14.7233 10.34 13.3833 12 13.3833C13.66 13.3833 15 14.7233 15 16.3833C15 18.0433 13.66 19.3833 12 19.3833ZM13 9.3833H7C5.9 9.3833 5 8.4833 5 7.3833C5 6.2833 5.9 5.3833 7 5.3833H13C14.1 5.3833 15 6.2833 15 7.3833C15 8.4833 14.1 9.3833 13 9.3833Z"
        fill={colorCode}
      />
    </svg>
  )
}
