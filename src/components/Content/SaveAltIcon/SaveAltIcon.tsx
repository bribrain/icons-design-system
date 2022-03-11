import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface ISaveAltIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function SaveAltIcon({ size = 24, rotate = 0, color = "black" }: ISaveAltIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19 13.3833V18.3833C19 18.9333 18.55 19.3833 18 19.3833H6C5.45 19.3833 5 18.9333 5 18.3833V13.3833C5 12.8333 4.55 12.3833 4 12.3833C3.45 12.3833 3 12.8333 3 13.3833V19.3833C3 20.4833 3.9 21.3833 5 21.3833H19C20.1 21.3833 21 20.4833 21 19.3833V13.3833C21 12.8333 20.55 12.3833 20 12.3833C19.45 12.3833 19 12.8333 19 13.3833ZM13 13.0533L14.88 11.1733C15.27 10.7833 15.9 10.7833 16.29 11.1733C16.68 11.5633 16.68 12.1933 16.29 12.5833L12.7 16.1733C12.31 16.5633 11.68 16.5633 11.29 16.1733L7.7 12.5833C7.31 12.1933 7.31 11.5633 7.7 11.1733C8.09 10.7833 8.72 10.7833 9.11 11.1733L11 13.0533V4.3833C11 3.8333 11.45 3.3833 12 3.3833C12.55 3.3833 13 3.8333 13 4.3833V13.0533Z"
        fill={colorCode}
      />
    </svg>
  )
}
