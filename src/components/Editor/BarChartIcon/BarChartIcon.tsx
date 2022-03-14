import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IBarChartIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function BarChartIcon({ size = 24, rotate = 0, color = "grey-100" }: IBarChartIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.4 9.58318H6.6C7.37 9.58318 8 10.2132 8 10.9832V17.9832C8 18.7532 7.37 19.3832 6.6 19.3832H6.4C5.63 19.3832 5 18.7532 5 17.9832V10.9832C5 10.2132 5.63 9.58318 6.4 9.58318ZM12 5.38318C12.77 5.38318 13.4 6.01318 13.4 6.78318V17.9832C13.4 18.7532 12.77 19.3832 12 19.3832C11.23 19.3832 10.6 18.7532 10.6 17.9832V6.78318C10.6 6.01318 11.23 5.38318 12 5.38318ZM17.6 13.3832C18.37 13.3832 19 14.0132 19 14.7832V17.9832C19 18.7532 18.37 19.3832 17.6 19.3832C16.83 19.3832 16.2 18.7532 16.2 17.9832V14.7832C16.2 14.0132 16.83 13.3832 17.6 13.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}
