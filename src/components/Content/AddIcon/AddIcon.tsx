import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IAddIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function AddIcon({ size = 24, rotate = 0, color = "black" }: IAddIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 13.3833H13V18.3833C13 18.9333 12.55 19.3833 12 19.3833C11.45 19.3833 11 18.9333 11 18.3833V13.3833H6C5.45 13.3833 5 12.9333 5 12.3833C5 11.8333 5.45 11.3833 6 11.3833H11V6.3833C11 5.8333 11.45 5.3833 12 5.3833C12.55 5.3833 13 5.8333 13 6.3833V11.3833H18C18.55 11.3833 19 11.8333 19 12.3833C19 12.9333 18.55 13.3833 18 13.3833Z"
        fill={colorCode}
      />
    </svg>
  )
}
