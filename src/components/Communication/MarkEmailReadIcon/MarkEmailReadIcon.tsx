import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IMarkEmailReadIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function MarkEmailReadIcon({ size = 24, rotate = 0, color = "grey-100" }: IMarkEmailReadIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.05 21.6732C17.66 22.0632 17.03 22.0632 16.64 21.6732L14.52 19.5532C14.13 19.1632 14.13 18.5332 14.52 18.1432C14.91 17.7532 15.54 17.7532 15.93 18.1432L17.34 19.5532L20.88 16.0132C21.27 15.6232 21.9 15.6232 22.29 16.0132C22.68 16.4032 22.68 17.0332 22.29 17.4232L18.05 21.6732ZM12.08 20.3832H4C2.9 20.3832 2 19.4832 2 18.3832V6.38318C2 5.28318 2.9 4.38318 4 4.38318H20C21.1 4.38318 22 5.28318 22 6.38318V13.0632C21.09 12.6332 20.08 12.3832 19 12.3832C15.13 12.3832 12 15.5132 12 19.3832C12 19.7232 12.03 20.0532 12.08 20.3832ZM11.47 13.0532C11.79 13.2532 12.21 13.2532 12.53 13.0532L19.6 8.63318C19.85 8.47318 20 8.20318 20 7.91318C20 7.24318 19.27 6.84318 18.7 7.19318L12 11.3832L5.3 7.19318C4.73 6.84318 4 7.24318 4 7.91318C4 8.20318 4.15 8.47318 4.4 8.63318L11.47 13.0532Z"
        fill={colorCode}
      />
    </svg>
  )
}
