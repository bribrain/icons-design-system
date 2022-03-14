import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IFormatUnderlinedIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function FormatUnderlinedIcon({ size = 24, rotate = 0, color = "grey-100" }: IFormatUnderlinedIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.79 17.3332C15.82 16.9432 18 14.2232 18 11.1732V4.63318C18 3.94318 17.44 3.38318 16.75 3.38318C16.06 3.38318 15.5 3.94318 15.5 4.63318V11.2832C15.5 12.9532 14.37 14.4732 12.73 14.8032C10.48 15.2732 8.5 13.5532 8.5 11.3832V4.63318C8.5 3.94318 7.94 3.38318 7.25 3.38318C6.56 3.38318 6 3.94318 6 4.63318V11.3832C6 14.9532 9.13 17.8032 12.79 17.3332ZM5 20.3832C5 20.9332 5.45 21.3832 6 21.3832H18C18.55 21.3832 19 20.9332 19 20.3832C19 19.8332 18.55 19.3832 18 19.3832H6C5.45 19.3832 5 19.8332 5 20.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}
