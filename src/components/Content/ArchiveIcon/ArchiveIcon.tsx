import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IArchiveIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function ArchiveIcon({ size = 24, rotate = 0, color = "black" }: IArchiveIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.54 5.6133L19.15 3.9333C18.88 3.5933 18.47 3.3833 18 3.3833H6C5.53 3.3833 5.12 3.5933 4.84 3.9333L3.46 5.6133C3.17 5.9533 3 6.4033 3 6.8833V19.3833C3 20.4833 3.9 21.3833 5 21.3833H19C20.1 21.3833 21 20.4833 21 19.3833V6.8833C21 6.4033 20.83 5.9533 20.54 5.6133ZM11.65 17.5333L6.5 12.3833H10V10.3833H14V12.3833H17.5L12.35 17.5333C12.16 17.7233 11.84 17.7233 11.65 17.5333ZM5.12 5.3833L5.93 4.3833H17.93L18.87 5.3833H5.12Z"
        fill={colorCode}
      />
    </svg>
  )
}
