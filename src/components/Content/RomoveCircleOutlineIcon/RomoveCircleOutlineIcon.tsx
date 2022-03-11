import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IRomoveCircleOutlineIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function RomoveCircleOutlineIcon({ size = 24, rotate = 0, color = "black" }: IRomoveCircleOutlineIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7 12.3833C7 12.9333 7.45 13.3833 8 13.3833H16C16.55 13.3833 17 12.9333 17 12.3833C17 11.8333 16.55 11.3833 16 11.3833H8C7.45 11.3833 7 11.8333 7 12.3833ZM12 2.3833C6.48 2.3833 2 6.8633 2 12.3833C2 17.9033 6.48 22.3833 12 22.3833C17.52 22.3833 22 17.9033 22 12.3833C22 6.8633 17.52 2.3833 12 2.3833ZM12 20.3833C7.59 20.3833 4 16.7933 4 12.3833C4 7.9733 7.59 4.3833 12 4.3833C16.41 4.3833 20 7.9733 20 12.3833C20 16.7933 16.41 20.3833 12 20.3833Z"
        fill={colorCode}
      />
    </svg>
  )
}
