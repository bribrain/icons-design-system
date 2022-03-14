import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IPushPinIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function PushPinIcon({ size = 24, rotate = 0, color = "grey-100" }: IPushPinIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 13.2533C19 12.7833 18.66 12.4033 18.2 12.2733C16.93 11.9233 16 10.7633 16 9.3833V4.3833H17C17.55 4.3833 18 3.9333 18 3.3833C18 2.8333 17.55 2.3833 17 2.3833H7C6.45 2.3833 6 2.8333 6 3.3833C6 3.9333 6.45 4.3833 7 4.3833H8V9.3833C8 10.7633 7.07 11.9233 5.8 12.2733C5.34 12.4033 5 12.7833 5 13.2533V13.3833C5 13.9333 5.45 14.3833 6 14.3833H10.98L11 21.3833C11 21.9333 11.45 22.3833 12 22.3833C12.55 22.3833 13 21.9333 13 21.3833L12.98 14.3833H18C18.55 14.3833 19 13.9333 19 13.3833V13.2533Z"
        fill={colorCode}
      />
    </svg>
  )
}
