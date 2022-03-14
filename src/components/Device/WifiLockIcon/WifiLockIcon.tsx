import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IWifiLockIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function WifiLockIcon({ size = 24, rotate = 0, color = "grey-100" }: IWifiLockIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.31 9.96318L24 6.38318C20.66 3.87318 16.5 2.38318 12 2.38318C7.5 2.38318 3.34 3.87318 0 6.38318L10.4 20.2532C11.2 21.3232 12.8 21.3232 13.6 20.2532L15.5 17.7232V14.8832C15.5 12.1232 17.74 9.88318 20.5 9.88318C20.78 9.88318 21.05 9.92318 21.31 9.96318ZM23 16.3832V14.8832C23 13.5032 21.88 12.3832 20.5 12.3832C19.12 12.3832 18 13.5032 18 14.8832V16.3832C17.45 16.3832 17 16.8332 17 17.3832V21.3832C17 21.9332 17.45 22.3832 18 22.3832H23C23.55 22.3832 24 21.9332 24 21.3832V17.3832C24 16.8332 23.55 16.3832 23 16.3832ZM22 16.3832H19V14.8832C19 14.0532 19.67 13.3832 20.5 13.3832C21.33 13.3832 22 14.0532 22 14.8832V16.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}
