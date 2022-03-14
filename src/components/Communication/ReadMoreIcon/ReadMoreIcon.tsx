import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IReadMoreIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function ReadMoreIcon({ size = 24, rotate = 0, color = "grey-100" }: IReadMoreIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 9.38318H21C21.55 9.38318 22 8.93318 22 8.38318C22 7.83318 21.55 7.38318 21 7.38318H14C13.45 7.38318 13 7.83318 13 8.38318C13 8.93318 13.45 9.38318 14 9.38318Z" fill={colorCode} />
      <path d="M21 15.3832H14C13.45 15.3832 13 15.8332 13 16.3832C13 16.9332 13.45 17.3832 14 17.3832H21C21.55 17.3832 22 16.9332 22 16.3832C22 15.8332 21.55 15.3832 21 15.3832Z" fill={colorCode} />
      <path d="M21 11.3832H17C16.45 11.3832 16 11.8332 16 12.3832C16 12.9332 16.45 13.3832 17 13.3832H21C21.55 13.3832 22 12.9332 22 12.3832C22 11.8332 21.55 11.3832 21 11.3832Z" fill={colorCode} />
      <path
        d="M8.85 8.23318C8.54 7.92318 8 8.14318 8 8.59318V11.3832H3C2.45 11.3832 2 11.8332 2 12.3832C2 12.9332 2.45 13.3832 3 13.3832H8V16.1732C8 16.6232 8.54 16.8432 8.85 16.5232L12.64 12.7332C12.84 12.5332 12.84 12.2232 12.64 12.0232L8.85 8.23318Z"
        fill={colorCode}
      />
    </svg>
  )
}
