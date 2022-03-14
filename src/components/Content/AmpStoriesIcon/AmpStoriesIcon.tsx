import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IAmpStoriesIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function AmpStoriesIcon({ size = 24, rotate = 0, color = "grey-100" }: IAmpStoriesIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 4.3833H8C7.45 4.3833 7 4.8333 7 5.3833V18.3833C7 18.9333 7.45 19.3833 8 19.3833H16C16.55 19.3833 17 18.9333 17 18.3833V5.3833C17 4.8333 16.55 4.3833 16 4.3833Z" fill={colorCode} />
      <path d="M4 6.3833C3.45 6.3833 3 6.8333 3 7.3833V16.3833C3 16.9333 3.45 17.3833 4 17.3833C4.55 17.3833 5 16.9333 5 16.3833V7.3833C5 6.8333 4.55 6.3833 4 6.3833Z" fill={colorCode} />
      <path d="M20 6.3833C19.45 6.3833 19 6.8333 19 7.3833V16.3833C19 16.9333 19.45 17.3833 20 17.3833C20.55 17.3833 21 16.9333 21 16.3833V7.3833C21 6.8333 20.55 6.3833 20 6.3833Z" fill={colorCode} />
    </svg>
  )
}
