import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IClearAllIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function ClearAllIcon({ size = 24, rotate = 0, color = "grey-100" }: IClearAllIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 13.3832H18C18.55 13.3832 19 12.9332 19 12.3832C19 11.8332 18.55 11.3832 18 11.3832H6C5.45 11.3832 5 11.8332 5 12.3832C5 12.9332 5.45 13.3832 6 13.3832ZM4 17.3832H16C16.55 17.3832 17 16.9332 17 16.3832C17 15.8332 16.55 15.3832 16 15.3832H4C3.45 15.3832 3 15.8332 3 16.3832C3 16.9332 3.45 17.3832 4 17.3832ZM7 8.38318C7 8.93318 7.45 9.38318 8 9.38318H20C20.55 9.38318 21 8.93318 21 8.38318C21 7.83318 20.55 7.38318 20 7.38318H8C7.45 7.38318 7 7.83318 7 8.38318Z"
        fill={colorCode}
      />
    </svg>
  )
}
