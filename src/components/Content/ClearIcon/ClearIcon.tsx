import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IClearIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function ClearIcon({ size = 24, rotate = 0, color = "black" }: IClearIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.3 6.09327C17.91 5.70327 17.28 5.70327 16.89 6.09327L12 10.9733L7.10997 6.08327C6.71997 5.69327 6.08997 5.69327 5.69997 6.08327C5.30997 6.47327 5.30997 7.10327 5.69997 7.49327L10.59 12.3833L5.69997 17.2733C5.30997 17.6633 5.30997 18.2933 5.69997 18.6833C6.08997 19.0733 6.71997 19.0733 7.10997 18.6833L12 13.7933L16.89 18.6833C17.28 19.0733 17.91 19.0733 18.3 18.6833C18.69 18.2933 18.69 17.6633 18.3 17.2733L13.41 12.3833L18.3 7.49327C18.68 7.11327 18.68 6.47327 18.3 6.09327Z"
        fill={colorCode}
      />
    </svg>
  )
}
