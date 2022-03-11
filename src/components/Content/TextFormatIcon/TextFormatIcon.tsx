import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface ITextFormatIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function TextFormatIcon({ size = 24, rotate = 0, color = "black" }: ITextFormatIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 18.3833C5 18.9333 5.45 19.3833 6 19.3833H18C18.55 19.3833 19 18.9333 19 18.3833C19 17.8333 18.55 17.3833 18 17.3833H6C5.45 17.3833 5 17.8333 5 18.3833ZM9.5 13.1833H14.5L15.16 14.7833C15.31 15.1433 15.66 15.3833 16.05 15.3833C16.74 15.3833 17.2 14.6733 16.93 14.0433L13.05 5.0733C12.87 4.6533 12.46 4.3833 12 4.3833C11.54 4.3833 11.13 4.6533 10.95 5.0733L7.07 14.0433C6.8 14.6733 7.27 15.3833 7.96 15.3833C8.35 15.3833 8.7 15.1433 8.85 14.7833L9.5 13.1833ZM12 6.3633L13.87 11.3833H10.13L12 6.3633Z"
        fill={colorCode}
      />
    </svg>
  )
}
