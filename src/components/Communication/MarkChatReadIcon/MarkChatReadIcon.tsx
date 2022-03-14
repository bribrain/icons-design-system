import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IMarkChatReadIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function MarkChatReadIcon({ size = 24, rotate = 0, color = "grey-100" }: IMarkChatReadIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.05 19.6732C17.66 20.0632 17.03 20.0632 16.64 19.6732L14.52 17.5532C14.13 17.1632 14.13 16.5332 14.52 16.1432C14.91 15.7532 15.54 15.7532 15.93 16.1432L17.34 17.5532L20.88 14.0132C21.27 13.6232 21.9 13.6232 22.29 14.0132C22.68 14.4032 22.68 15.0332 22.29 15.4232L18.05 19.6732ZM12 17.3832C12 13.5132 15.13 10.3832 19 10.3832C20.08 10.3832 21.09 10.6332 22 11.0632V4.38318C22 3.28318 21.1 2.38318 20 2.38318H4C2.9 2.38318 2 3.28318 2 4.38318V22.3832L6 18.3832H12C12 18.2132 12.01 18.0532 12.03 17.8832C12.01 17.7132 12 17.5532 12 17.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}
