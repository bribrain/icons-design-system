import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IDevicesIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function DevicesIcon({ size = 24, rotate = 0, color = "grey-100" }: IDevicesIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 7.38318C4 6.83318 4.45 6.38318 5 6.38318H21C21.55 6.38318 22 5.93318 22 5.38318C22 4.83318 21.55 4.38318 21 4.38318H4C2.9 4.38318 2 5.28318 2 6.38318V17.3832H1.5C0.67 17.3832 0 18.0532 0 18.8832C0 19.7132 0.67 20.3832 1.5 20.3832H14V17.3832H4V7.38318ZM23 8.38318H17C16.45 8.38318 16 8.83318 16 9.38318V19.3832C16 19.9332 16.45 20.3832 17 20.3832H23C23.55 20.3832 24 19.9332 24 19.3832V9.38318C24 8.83318 23.55 8.38318 23 8.38318ZM22 17.3832H18V10.3832H22V17.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}
