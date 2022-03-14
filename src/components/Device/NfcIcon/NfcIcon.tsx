import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface INfcIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function NfcIcon({ size = 24, rotate = 0, color = "grey-100" }: INfcIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 2.38318H4C2.9 2.38318 2 3.28318 2 4.38318V20.3832C2 21.4832 2.9 22.3832 4 22.3832H20C21.1 22.3832 22 21.4832 22 20.3832V4.38318C22 3.28318 21.1 2.38318 20 2.38318ZM19 20.3832H5C4.45 20.3832 4 19.9332 4 19.3832V5.38318C4 4.83318 4.45 4.38318 5 4.38318H19C19.55 4.38318 20 4.83318 20 5.38318V19.3832C20 19.9332 19.55 20.3832 19 20.3832ZM16 6.38318H13C11.9 6.38318 11 7.28318 11 8.38318V10.6632C10.4 11.0132 10 11.6432 10 12.3832C10 13.4832 10.9 14.3832 12 14.3832C13.1 14.3832 14 13.4832 14 12.3832C14 11.6432 13.6 11.0032 13 10.6632V8.38318H16V15.3832C16 15.9332 15.55 16.3832 15 16.3832H9C8.45 16.3832 8 15.9332 8 15.3832V8.38318H9C9.55 8.38318 10 7.93318 10 7.38318C10 6.83318 9.55 6.38318 9 6.38318H8C6.9 6.38318 6 7.28318 6 8.38318V16.3832C6 17.4832 6.9 18.3832 8 18.3832H16C17.1 18.3832 18 17.4832 18 16.3832V8.38318C18 7.28318 17.1 6.38318 16 6.38318Z"
        fill={colorCode}
      />
    </svg>
  )
}
