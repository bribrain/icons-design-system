import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IRomoveIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function RomoveIcon({ size = 24, rotate = 0, color = "grey-100" }: IRomoveIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 13.3833H6C5.45 13.3833 5 12.9333 5 12.3833C5 11.8333 5.45 11.3833 6 11.3833H18C18.55 11.3833 19 11.8333 19 12.3833C19 12.9333 18.55 13.3833 18 13.3833Z" fill={colorCode} />
    </svg>
  )
}
