import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IFormatTextdirectionLToRIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function FormatTextdirectionLToRIcon({ size = 24, rotate = 0, color = "grey-100" }: IFormatTextdirectionLToRIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9 10.3832V14.3832C9 14.9332 9.45 15.3832 10 15.3832C10.55 15.3832 11 14.9332 11 14.3832V4.38318H13V14.3832C13 14.9332 13.45 15.3832 14 15.3832C14.55 15.3832 15 14.9332 15 14.3832V4.38318H16C16.55 4.38318 17 3.93318 17 3.38318C17 2.83318 16.55 2.38318 16 2.38318H9.17C7.08 2.38318 5.22 3.91318 5.02 5.99318C4.79 8.37318 6.66 10.3832 9 10.3832ZM20.65 18.0332L17.86 15.2432C17.54 14.9232 17 15.1432 17 15.5932V17.3832H6C5.45 17.3832 5 17.8332 5 18.3832C5 18.9332 5.45 19.3832 6 19.3832H17V21.1732C17 21.6232 17.54 21.8432 17.85 21.5232L20.64 18.7332C20.84 18.5432 20.84 18.2232 20.65 18.0332Z"
        fill={colorCode}
      />
    </svg>
  )
}
