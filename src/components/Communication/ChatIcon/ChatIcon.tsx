import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IChatIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function ChatIcon({ size = 24, rotate = 0, color = "grey-100" }: IChatIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 2.38318H4C2.9 2.38318 2.01 3.28318 2.01 4.38318L2 22.3832L6 18.3832H20C21.1 18.3832 22 17.4832 22 16.3832V4.38318C22 3.28318 21.1 2.38318 20 2.38318ZM7 9.38318H17C17.55 9.38318 18 9.83318 18 10.3832C18 10.9332 17.55 11.3832 17 11.3832H7C6.45 11.3832 6 10.9332 6 10.3832C6 9.83318 6.45 9.38318 7 9.38318ZM13 14.3832H7C6.45 14.3832 6 13.9332 6 13.3832C6 12.8332 6.45 12.3832 7 12.3832H13C13.55 12.3832 14 12.8332 14 13.3832C14 13.9332 13.55 14.3832 13 14.3832ZM17 8.38318H7C6.45 8.38318 6 7.93318 6 7.38318C6 6.83318 6.45 6.38318 7 6.38318H17C17.55 6.38318 18 6.83318 18 7.38318C18 7.93318 17.55 8.38318 17 8.38318Z"
        fill={colorCode}
      />
    </svg>
  )
}
