import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IOutlinedFlagIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function OutlinedFlagIcon({ size = 24, rotate = 0, color = "black" }: IOutlinedFlagIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 6.3833L13.28 4.9333C13.11 4.5933 12.76 4.3833 12.38 4.3833H6C5.45 4.3833 5 4.8333 5 5.3833V20.3833C5 20.9333 5.45 21.3833 6 21.3833C6.55 21.3833 7 20.9333 7 20.3833V14.3833H12L12.72 15.8333C12.89 16.1733 13.24 16.3833 13.61 16.3833H19C19.55 16.3833 20 15.9333 20 15.3833V7.3833C20 6.8333 19.55 6.3833 19 6.3833H14ZM18 14.3833H14L13 12.3833H7V6.3833H12L13 8.3833H18V14.3833Z"
        fill={colorCode}
      />
    </svg>
  )
}
