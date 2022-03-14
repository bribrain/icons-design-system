import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IMobileFriendlyIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function MobileFriendlyIcon({ size = 24, rotate = 0, color = "grey-100" }: IMobileFriendlyIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19 1.38318H9C7.9 1.38318 7 2.28318 7 3.38318V5.38318C7 5.93318 7.45 6.38318 8 6.38318C8.55 6.38318 9 5.93318 9 5.38318V4.38318H19V20.3832H9V19.3832C9 18.8332 8.55 18.3832 8 18.3832C7.45 18.3832 7 18.8332 7 19.3832V21.3832C7 22.4832 7.9 23.3832 9 23.3832H19C20.1 23.3832 21 22.4832 21 21.3832V3.38318C21 2.28318 20.1 1.38318 19 1.38318ZM7.01 13.8532L5.09 11.9332C4.74 11.5832 4.17 11.5832 3.82 11.9332C3.47 12.2832 3.47 12.8532 3.82 13.2032L6.29 15.6732C6.68 16.0632 7.31 16.0632 7.7 15.6732L13.55 9.82318C13.9 9.47318 13.9 8.90318 13.55 8.55318C13.2 8.20318 12.63 8.20318 12.28 8.55318L7.01 13.8532Z"
        fill={colorCode}
      />
    </svg>
  )
}
