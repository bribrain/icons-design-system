import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IHourglassTopIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function HourglassTopIcon({ size = 24, rotate = 0, color = "grey-100" }: IHourglassTopIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 2.38318C6.9 2.38318 6 3.28318 6 4.38318L6.01 7.56318C6.01 8.09318 6.22 8.59318 6.59 8.97318L10 12.3832L6.59 15.8132C6.22 16.1832 6.01 16.6932 6.01 17.2232L6 20.3832C6 21.4832 6.9 22.3832 8 22.3832H16C17.1 22.3832 18 21.4832 18 20.3832V17.2232C18 16.6932 17.79 16.1832 17.42 15.8132L14 12.3832L17.41 8.98318C17.79 8.60318 18 8.09318 18 7.56318V4.38318C18 3.28318 17.1 2.38318 16 2.38318H8ZM16 17.2932V19.3832C16 19.9332 15.55 20.3832 15 20.3832H9C8.45 20.3832 8 19.9332 8 19.3832V17.2932C8 17.0232 8.11 16.7732 8.29 16.5832L12 12.8832L15.71 16.5932C15.89 16.7732 16 17.0332 16 17.2932Z"
        fill={colorCode}
      />
    </svg>
  )
}
