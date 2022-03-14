import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IBatteryAlertIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function BatteryAlertIcon({ size = 24, rotate = 0, color = "grey-100" }: IBatteryAlertIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.67 4.38318H14V3.38318C14 2.83318 13.55 2.38318 13 2.38318H11C10.45 2.38318 10 2.83318 10 3.38318V4.38318H8.33C7.6 4.38318 7 4.98318 7 5.71318V21.0432C7 21.7832 7.6 22.3832 8.34 22.3832H15.66C16.4 22.3832 17 21.7832 17 21.0532V5.71318C17 4.98318 16.4 4.38318 15.67 4.38318ZM13 18.3832H11V16.3832H13V18.3832ZM13 13.3832C13 13.9332 12.55 14.3832 12 14.3832C11.45 14.3832 11 13.9332 11 13.3832V10.3832C11 9.83318 11.45 9.38318 12 9.38318C12.55 9.38318 13 9.83318 13 10.3832V13.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}
