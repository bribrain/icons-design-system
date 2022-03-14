import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface ISortIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function SortIcon({ size = 24, rotate = 0, color = "grey-100" }: ISortIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 18.3833H8C8.55 18.3833 9 17.9333 9 17.3833C9 16.8333 8.55 16.3833 8 16.3833H4C3.45 16.3833 3 16.8333 3 17.3833C3 17.9333 3.45 18.3833 4 18.3833ZM3 7.3833C3 7.9333 3.45 8.3833 4 8.3833H20C20.55 8.3833 21 7.9333 21 7.3833C21 6.8333 20.55 6.3833 20 6.3833H4C3.45 6.3833 3 6.8333 3 7.3833ZM4 13.3833H14C14.55 13.3833 15 12.9333 15 12.3833C15 11.8333 14.55 11.3833 14 11.3833H4C3.45 11.3833 3 11.8333 3 12.3833C3 12.9333 3.45 13.3833 4 13.3833Z"
        fill={colorCode}
      />
    </svg>
  )
}
