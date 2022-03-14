import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IThermostatIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function ThermostatIcon({ size = 24, rotate = 0, color = "grey-100" }: IThermostatIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15 13.3832V5.38318C15 3.72318 13.66 2.38318 12 2.38318C10.34 2.38318 9 3.72318 9 5.38318V13.3832C7.79 14.2932 7 15.7532 7 17.3832C7 20.1432 9.24 22.3832 12 22.3832C14.76 22.3832 17 20.1432 17 17.3832C17 15.7532 16.21 14.2932 15 13.3832ZM13 11.3832H11V5.38318C11 4.83318 11.45 4.38318 12 4.38318C12.55 4.38318 13 4.83318 13 5.38318H12.5C12.22 5.38318 12 5.60318 12 5.88318C12 6.16318 12.22 6.38318 12.5 6.38318H13V8.38318H12.5C12.22 8.38318 12 8.60318 12 8.88318C12 9.16318 12.22 9.38318 12.5 9.38318H13V11.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}
