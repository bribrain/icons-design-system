import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IDynamicFeedIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function DynamicFeedIcon({ size = 24, rotate = 0, color = "black" }: IDynamicFeedIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 8.3833C6.45 8.3833 6 8.8333 6 9.3833V15.3833C6 16.4833 6.9 17.3833 8 17.3833H16C16.55 17.3833 17 16.9333 17 16.3833C17 15.8333 16.55 15.3833 16 15.3833H8V9.3833C8 8.8333 7.55 8.3833 7 8.3833Z" fill={colorCode} />
      <path
        d="M20 3.3833H12C10.9 3.3833 10 4.2833 10 5.3833V11.3833C10 12.4833 10.9 13.3833 12 13.3833H20C21.1 13.3833 22 12.4833 22 11.3833V5.3833C22 4.2833 21.1 3.3833 20 3.3833ZM19.5 11.3833H12.5C12.22 11.3833 12 11.1633 12 10.8833V7.3833H20V10.8833C20 11.1633 19.78 11.3833 19.5 11.3833Z"
        fill={colorCode}
      />
      <path d="M3 12.3833C2.45 12.3833 2 12.8333 2 13.3833V19.3833C2 20.4833 2.9 21.3833 4 21.3833H12C12.55 21.3833 13 20.9333 13 20.3833C13 19.8333 12.55 19.3833 12 19.3833H4V13.3833C4 12.8333 3.55 12.3833 3 12.3833Z" fill={colorCode} />
    </svg>
  )
}
