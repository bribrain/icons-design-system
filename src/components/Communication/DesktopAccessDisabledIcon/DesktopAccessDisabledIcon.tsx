import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IDesktopAccessDisabledIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function DesktopAccessDisabledIcon({ size = 24, rotate = 0, color = "grey-100" }: IDesktopAccessDisabledIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.310017 2.3832C-0.0799829 2.7732 -0.0799829 3.4032 0.310017 3.7932L1.00002 4.4732V16.3832C1.00002 17.4832 1.90002 18.3832 3.00002 18.3832H10V20.3832H9.00002C8.45002 20.3832 8.00002 20.8332 8.00002 21.3832C8.00002 21.9332 8.45002 22.3832 9.00002 22.3832H15C15.55 22.3832 16 21.9332 16 21.3832C16 20.8332 15.55 20.3832 15 20.3832H14V18.3832H14.9L20.19 23.6732C20.58 24.0632 21.21 24.0632 21.6 23.6732C21.99 23.2832 21.99 22.6532 21.6 22.2632L1.72002 2.3832C1.33002 1.9932 0.700017 1.9932 0.310017 2.3832ZM2.99002 15.3832V6.4732L12.9 16.3832H3.99002C3.44002 16.3832 2.99002 15.9332 2.99002 15.3832ZM4.55002 2.3832L6.55002 4.3832H20C20.55 4.3832 21 4.8332 21 5.3832V15.3832C21 15.9332 20.55 16.3832 20 16.3832H18.55L20.55 18.3832H20.99C22.09 18.3832 22.99 17.4832 22.99 16.3832V4.3832C22.99 3.2832 22.09 2.3832 20.99 2.3832H4.55002Z"
        fill={colorCode}
      />
    </svg>
  )
}
