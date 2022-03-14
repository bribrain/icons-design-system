import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IMarkChatUnreadIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function MarkChatUnreadIcon({ size = 24, rotate = 0, color = "grey-100" }: IMarkChatUnreadIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_73_3667)">
        <path
          d="M22 7.36318V16.3832C22 17.4832 21.1 18.3832 20 18.3832H6L2 22.3832V4.38318C2 3.28318 2.9 2.38318 4 2.38318H14.1C14.04 2.70318 14 3.04318 14 3.38318C14 6.14318 16.24 8.38318 19 8.38318C20.13 8.38318 21.16 7.99318 22 7.36318ZM16 3.38318C16 5.04318 17.34 6.38318 19 6.38318C20.66 6.38318 22 5.04318 22 3.38318C22 1.72318 20.66 0.383179 19 0.383179C17.34 0.383179 16 1.72318 16 3.38318Z"
          fill={colorCode}
        />
      </g>
      <defs>
        <clipPath id="clip0_73_3667">
          <rect width={size} height={size} fill="white" transform="translate(0 0.383179)" />
        </clipPath>
      </defs>
    </svg>
  )
}
