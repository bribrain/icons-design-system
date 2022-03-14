import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IFlagIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function FlagIcon({ size = 24, rotate = 0, color = "grey-100" }: IFlagIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.4 6.3833L14.16 5.1833C14.07 4.7233 13.66 4.3833 13.18 4.3833H6C5.45 4.3833 5 4.8333 5 5.3833V20.3833C5 20.9333 5.45 21.3833 6 21.3833C6.55 21.3833 7 20.9333 7 20.3833V14.3833H12.6L12.84 15.5833C12.93 16.0533 13.34 16.3833 13.82 16.3833H19C19.55 16.3833 20 15.9333 20 15.3833V7.3833C20 6.8333 19.55 6.3833 19 6.3833H14.4Z"
        fill={colorCode}
      />
    </svg>
  )
}
