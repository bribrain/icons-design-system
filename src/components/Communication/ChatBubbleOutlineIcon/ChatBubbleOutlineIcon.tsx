import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IChatBubbleOutlineIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function ChatBubbleOutlineIcon({ size = 24, rotate = 0, color = "grey-100" }: IChatBubbleOutlineIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 2.38318H4C2.9 2.38318 2 3.28318 2 4.38318V22.3832L6 18.3832H20C21.1 18.3832 22 17.4832 22 16.3832V4.38318C22 3.28318 21.1 2.38318 20 2.38318ZM19 16.3832H6L4 18.3832V5.38318C4 4.83318 4.45 4.38318 5 4.38318H19C19.55 4.38318 20 4.83318 20 5.38318V15.3832C20 15.9332 19.55 16.3832 19 16.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}
