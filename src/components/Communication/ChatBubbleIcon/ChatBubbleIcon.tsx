import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IChatBubbleIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function ChatBubbleIcon({ size = 24, rotate = 0, color = "grey-100" }: IChatBubbleIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 2.38318H4C2.9 2.38318 2 3.28318 2 4.38318V22.3832L6 18.3832H20C21.1 18.3832 22 17.4832 22 16.3832V4.38318C22 3.28318 21.1 2.38318 20 2.38318Z" fill={colorCode} />
    </svg>
  )
}
