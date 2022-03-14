import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IEmailIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function EmailIcon({ size = 24, rotate = 0, color = "grey-100" }: IEmailIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 4.38318H4C2.9 4.38318 2.01 5.28318 2.01 6.38318L2 18.3832C2 19.4832 2.9 20.3832 4 20.3832H20C21.1 20.3832 22 19.4832 22 18.3832V6.38318C22 5.28318 21.1 4.38318 20 4.38318ZM19.6 8.63318L12.53 13.0532C12.21 13.2532 11.79 13.2532 11.47 13.0532L4.4 8.63318C4.15 8.47318 4 8.20318 4 7.91318C4 7.24318 4.73 6.84318 5.3 7.19318L12 11.3832L18.7 7.19318C19.27 6.84318 20 7.24318 20 7.91318C20 8.20318 19.85 8.47318 19.6 8.63318Z"
        fill={colorCode}
      />
    </svg>
  )
}
