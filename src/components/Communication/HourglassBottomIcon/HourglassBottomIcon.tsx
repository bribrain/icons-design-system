import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IHourglassBottomIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function HourglassBottomIcon({ size = 24, rotate = 0, color = "grey-100" }: IHourglassBottomIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 22.3832C17.1 22.3832 18 21.4832 18 20.3832L17.99 17.2032C17.99 16.6732 17.78 16.1732 17.41 15.7932L14 12.3832L17.41 8.95318C17.78 8.58318 17.99 8.07318 17.99 7.54318L18 4.38318C18 3.28318 17.1 2.38318 16 2.38318H8C6.9 2.38318 6 3.28318 6 4.38318V7.54318C6 8.07318 6.21 8.58318 6.58 8.96318L10 12.3832L6.59 15.7832C6.21 16.1632 6 16.6732 6 17.2032V20.3832C6 21.4832 6.9 22.3832 8 22.3832H16ZM8 7.47318V5.38318C8 4.83318 8.45 4.38318 9 4.38318H15C15.55 4.38318 16 4.83318 16 5.38318V7.47318C16 7.74318 15.89 7.99318 15.71 8.18318L12 11.8832L8.29 8.17318C8.11 7.99318 8 7.73318 8 7.47318Z"
        fill={colorCode}
      />
    </svg>
  )
}
