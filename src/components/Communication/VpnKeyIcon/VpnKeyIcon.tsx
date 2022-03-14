import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IVpnKeyIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function VpnKeyIcon({ size = 24, rotate = 0, color = "grey-100" }: IVpnKeyIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.6499 10.3832C11.6999 7.69318 8.89994 5.88318 5.76994 6.50318C3.47994 6.96318 1.61994 8.79318 1.13994 11.0832C0.31994 14.9532 3.25994 18.3832 6.99994 18.3832C9.60994 18.3832 11.8299 16.7132 12.6499 14.3832H16.9999V16.3832C16.9999 17.4832 17.8999 18.3832 18.9999 18.3832C20.0999 18.3832 20.9999 17.4832 20.9999 16.3832V14.3832C22.0999 14.3832 22.9999 13.4832 22.9999 12.3832C22.9999 11.2832 22.0999 10.3832 20.9999 10.3832H12.6499ZM6.99994 14.3832C5.89994 14.3832 4.99994 13.4832 4.99994 12.3832C4.99994 11.2832 5.89994 10.3832 6.99994 10.3832C8.09994 10.3832 8.99994 11.2832 8.99994 12.3832C8.99994 13.4832 8.09994 14.3832 6.99994 14.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}
