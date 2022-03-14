import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface ISignalCellularConnectedNoInternet4BarIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function SignalCellularConnectedNoInternet4BarIcon({ size = 24, rotate = 0, color = "grey-100" }: ISignalCellularConnectedNoInternet4BarIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21 18.3832C21.55 18.3832 22 17.9332 22 17.3832V11.3832C22 10.8332 21.55 10.3832 21 10.3832C20.45 10.3832 20 10.8332 20 11.3832V17.3832C20 17.9332 20.45 18.3832 21 18.3832ZM20 22.3832H22V20.3832H20V22.3832ZM4.40999 22.3832H18V11.3832C18 9.7232 19.34 8.3832 21 8.3832H22V4.7932C22 3.9032 20.92 3.4532 20.29 4.0832L3.70999 20.6732C3.07999 21.3032 3.51999 22.3832 4.40999 22.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}
