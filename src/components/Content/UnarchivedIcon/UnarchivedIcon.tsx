import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IUnarchivedIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function UnarchivedIcon({ size = 24, rotate = 0, color = "black" }: IUnarchivedIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.55 5.6033L19.16 3.9233C18.88 3.5933 18.47 3.3833 18 3.3833H6C5.53 3.3833 5.12 3.5933 4.85 3.9333L3.46 5.6033C3.17 5.9533 3 6.3933 3 6.8833V19.3833C3 20.4833 3.89 21.3833 5 21.3833H19C20.1 21.3833 21 20.4833 21 19.3833V6.8833C21 6.3933 20.83 5.9533 20.55 5.6033ZM12.35 10.2333L17.5 15.3833H14V17.3833H10V15.3833H6.5L11.65 10.2333C11.84 10.0433 12.16 10.0433 12.35 10.2333V10.2333ZM5.12 5.3833L5.94 4.3833H17.94L18.87 5.3833H5.12Z"
        fill={colorCode}
      />
    </svg>
  )
}
