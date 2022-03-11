import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IGpsFixedIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function GpsFixedIcon({ size = 24, rotate = 0, color = "grey-100" }: IGpsFixedIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 8.38318C9.79 8.38318 8 10.1732 8 12.3832C8 14.5932 9.79 16.3832 12 16.3832C14.21 16.3832 16 14.5932 16 12.3832C16 10.1732 14.21 8.38318 12 8.38318ZM20.94 11.3832C20.48 7.21318 17.17 3.90318 13 3.44318V2.38318C13 1.83318 12.55 1.38318 12 1.38318C11.45 1.38318 11 1.83318 11 2.38318V3.44318C6.83 3.90318 3.52 7.21318 3.06 11.3832H2C1.45 11.3832 1 11.8332 1 12.3832C1 12.9332 1.45 13.3832 2 13.3832H3.06C3.52 17.5532 6.83 20.8632 11 21.3232V22.3832C11 22.9332 11.45 23.3832 12 23.3832C12.55 23.3832 13 22.9332 13 22.3832V21.3232C17.17 20.8632 20.48 17.5532 20.94 13.3832H22C22.55 13.3832 23 12.9332 23 12.3832C23 11.8332 22.55 11.3832 22 11.3832H20.94ZM12 19.3832C8.13 19.3832 5 16.2532 5 12.3832C5 8.51318 8.13 5.38318 12 5.38318C15.87 5.38318 19 8.51318 19 12.3832C19 16.2532 15.87 19.3832 12 19.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}
