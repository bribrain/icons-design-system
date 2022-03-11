import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IReplyIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function ReplyIcon({ size = 24, rotate = 0, color = "black" }: IReplyIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.99997 9.38332V7.79332C9.99997 6.90332 8.91997 6.45332 8.28997 7.08332L3.69997 11.6733C3.30997 12.0633 3.30997 12.6933 3.69997 13.0833L8.28997 17.6733C8.91997 18.3033 9.99997 17.8633 9.99997 16.9733V15.2833C15 15.2833 18.5 16.8833 21 20.3833C20 15.3833 17 10.3833 9.99997 9.38332Z"
        fill={colorCode}
      />
    </svg>
  )
}
