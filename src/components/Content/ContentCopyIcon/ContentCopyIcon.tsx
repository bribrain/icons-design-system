import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IContentCopyIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function ContentCopyIcon({ size = 24, rotate = 0, color = "black" }: IContentCopyIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15 1.3833H4C2.9 1.3833 2 2.2833 2 3.3833V16.3833C2 16.9333 2.45 17.3833 3 17.3833C3.55 17.3833 4 16.9333 4 16.3833V4.3833C4 3.8333 4.45 3.3833 5 3.3833H15C15.55 3.3833 16 2.9333 16 2.3833C16 1.8333 15.55 1.3833 15 1.3833ZM19 5.3833H8C6.9 5.3833 6 6.2833 6 7.3833V21.3833C6 22.4833 6.9 23.3833 8 23.3833H19C20.1 23.3833 21 22.4833 21 21.3833V7.3833C21 6.2833 20.1 5.3833 19 5.3833ZM18 21.3833H9C8.45 21.3833 8 20.9333 8 20.3833V8.3833C8 7.8333 8.45 7.3833 9 7.3833H18C18.55 7.3833 19 7.8333 19 8.3833V20.3833C19 20.9333 18.55 21.3833 18 21.3833Z"
        fill={colorCode}
      />
    </svg>
  )
}
