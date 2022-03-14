import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface ISdStorageIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function SdStorageIcon({ size = 24, rotate = 0, color = "grey-100" }: ISdStorageIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 2.38318H10.83C10.3 2.38318 9.79 2.59318 9.41 2.97318L4.6 7.80318C4.23 8.17318 4 8.68318 4 9.20318V20.3832C4 21.4832 4.9 22.3832 6 22.3832H18C19.1 22.3832 20 21.4832 20 20.3832V4.38318C20 3.28318 19.1 2.38318 18 2.38318ZM11 8.38318C10.45 8.38318 10 7.93318 10 7.38318V5.38318C10 4.83318 10.45 4.38318 11 4.38318C11.55 4.38318 12 4.83318 12 5.38318V7.38318C12 7.93318 11.55 8.38318 11 8.38318ZM14 8.38318C13.45 8.38318 13 7.93318 13 7.38318V5.38318C13 4.83318 13.45 4.38318 14 4.38318C14.55 4.38318 15 4.83318 15 5.38318V7.38318C15 7.93318 14.55 8.38318 14 8.38318ZM17 8.38318C16.45 8.38318 16 7.93318 16 7.38318V5.38318C16 4.83318 16.45 4.38318 17 4.38318C17.55 4.38318 18 4.83318 18 5.38318V7.38318C18 7.93318 17.55 8.38318 17 8.38318Z"
        fill={colorCode}
      />
    </svg>
  )
}
