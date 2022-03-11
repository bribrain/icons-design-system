import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IBatteryFullIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function BatteryFullIcon({ size = 24, rotate = 0, color = "grey-100" }: IBatteryFullIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.67 4.38318H14V3.38318C14 2.83318 13.55 2.38318 13 2.38318H11C10.45 2.38318 10 2.83318 10 3.38318V4.38318H8.33C7.6 4.38318 7 4.98318 7 5.71318V21.0432C7 21.7832 7.6 22.3832 8.34 22.3832H15.66C16.4 22.3832 17 21.7832 17 21.0532V5.71318C17 4.98318 16.4 4.38318 15.67 4.38318Z"
        fill={colorCode}
      />
    </svg>
  )
}
