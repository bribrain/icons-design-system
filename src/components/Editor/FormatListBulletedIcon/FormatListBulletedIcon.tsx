import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IFormatListBulletedIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function FormatListBulletedIcon({ size = 24, rotate = 0, color = "grey-100" }: IFormatListBulletedIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 10.8832C3.17 10.8832 2.5 11.5532 2.5 12.3832C2.5 13.2132 3.17 13.8832 4 13.8832C4.83 13.8832 5.5 13.2132 5.5 12.3832C5.5 11.5532 4.83 10.8832 4 10.8832ZM4 4.88318C3.17 4.88318 2.5 5.55318 2.5 6.38318C2.5 7.21318 3.17 7.88318 4 7.88318C4.83 7.88318 5.5 7.21318 5.5 6.38318C5.5 5.55318 4.83 4.88318 4 4.88318ZM4 16.8832C3.17 16.8832 2.5 17.5632 2.5 18.3832C2.5 19.2032 3.18 19.8832 4 19.8832C4.82 19.8832 5.5 19.2032 5.5 18.3832C5.5 17.5632 4.83 16.8832 4 16.8832ZM8 19.3832H20C20.55 19.3832 21 18.9332 21 18.3832C21 17.8332 20.55 17.3832 20 17.3832H8C7.45 17.3832 7 17.8332 7 18.3832C7 18.9332 7.45 19.3832 8 19.3832ZM8 13.3832H20C20.55 13.3832 21 12.9332 21 12.3832C21 11.8332 20.55 11.3832 20 11.3832H8C7.45 11.3832 7 11.8332 7 12.3832C7 12.9332 7.45 13.3832 8 13.3832ZM7 6.38318C7 6.93318 7.45 7.38318 8 7.38318H20C20.55 7.38318 21 6.93318 21 6.38318C21 5.83318 20.55 5.38318 20 5.38318H8C7.45 5.38318 7 5.83318 7 6.38318Z"
        fill={colorCode}
      />
    </svg>
  )
}
