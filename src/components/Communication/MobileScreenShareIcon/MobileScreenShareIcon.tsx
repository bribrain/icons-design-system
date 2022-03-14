import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IMobileScreenShareIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function MobileScreenShareIcon({ size = 24, rotate = 0, color = "grey-100" }: IMobileScreenShareIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17 1.38318H7.00001C5.90001 1.38318 5.01001 2.28318 5.01001 3.38318V21.3832C5.01001 22.4832 5.90001 23.3832 7.00001 23.3832H17C18.1 23.3832 19 22.4832 19 21.3832V3.38318C19 2.28318 18.1 1.38318 17 1.38318ZM17 19.3832H7.00001V5.38318H17V19.3832ZM12.8 13.6032V15.3532L15.61 12.7332C15.82 12.5332 15.82 12.2032 15.61 12.0032L12.8 9.38318V11.0832C9.69001 11.5132 8.45001 13.6432 8.00001 15.7832C9.11001 14.2832 10.58 13.6032 12.8 13.6032Z"
        fill={colorCode}
      />
    </svg>
  )
}
