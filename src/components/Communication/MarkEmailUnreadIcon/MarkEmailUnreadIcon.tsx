import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IMarkEmailUnreadIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function MarkEmailUnreadIcon({ size = 24, rotate = 0, color = "grey-100" }: IMarkEmailUnreadIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19 10.3832C20.13 10.3832 21.16 9.99318 22 9.36318V18.3832C22 19.4832 21.1 20.3832 20 20.3832H4C2.9 20.3832 2 19.4832 2 18.3832V6.38318C2 5.28318 2.9 4.38318 4 4.38318H14.1C14.04 4.70318 14 5.04318 14 5.38318C14 6.86318 14.65 8.17318 15.67 9.09318L12 11.3832L5.3 7.19318C4.73 6.84318 4 7.24318 4 7.91318C4 8.20318 4.15 8.47318 4.4 8.63318L11.47 13.0532C11.79 13.2532 12.21 13.2532 12.53 13.0532L17.3 10.0732C17.84 10.2632 18.4 10.3832 19 10.3832ZM16 5.38318C16 7.04318 17.34 8.38318 19 8.38318C20.66 8.38318 22 7.04318 22 5.38318C22 3.72318 20.66 2.38318 19 2.38318C17.34 2.38318 16 3.72318 16 5.38318Z"
        fill={colorCode}
      />
    </svg>
  )
}
