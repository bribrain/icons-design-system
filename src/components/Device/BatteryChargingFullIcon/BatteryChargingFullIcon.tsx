import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IBatteryChargingFullIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function BatteryChargingFullIcon({ size = 24, rotate = 0, color = "grey-100" }: IBatteryChargingFullIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.67 4.38318H14V3.38318C14 2.83318 13.55 2.38318 13 2.38318H11C10.45 2.38318 10 2.83318 10 3.38318V4.38318H8.33C7.6 4.38318 7 4.98318 7 5.71318V21.0432C7 21.7832 7.6 22.3832 8.34 22.3832H15.66C16.4 22.3832 17 21.7832 17 21.0532V5.71318C17 4.98318 16.4 4.38318 15.67 4.38318ZM14.61 13.6232L11.94 18.6232C11.7 19.0732 11 18.9032 11 18.3832V14.8832H9.83C9.45 14.8832 9.21 14.4832 9.39 14.1432L12.06 9.14318C12.3 8.69318 13 8.86318 13 9.38318V12.8832H14.17C14.54 12.8832 14.79 13.2832 14.61 13.6232Z"
        fill={colorCode}
      />
    </svg>
  )
}
