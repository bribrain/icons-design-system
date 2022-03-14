import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IRomoveCircleIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function RomoveCircleIcon({ size = 24, rotate = 0, color = "grey-100" }: IRomoveCircleIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2.3833C6.48 2.3833 2 6.8633 2 12.3833C2 17.9033 6.48 22.3833 12 22.3833C17.52 22.3833 22 17.9033 22 12.3833C22 6.8633 17.52 2.3833 12 2.3833ZM16 13.3833H8C7.45 13.3833 7 12.9333 7 12.3833C7 11.8333 7.45 11.3833 8 11.3833H16C16.55 11.3833 17 11.8333 17 12.3833C17 12.9333 16.55 13.3833 16 13.3833Z"
        fill={colorCode}
      />
    </svg>
  )
}
