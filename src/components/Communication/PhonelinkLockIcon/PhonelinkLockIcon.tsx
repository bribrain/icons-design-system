import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IPhonelinkLockIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function PhonelinkLockIcon({ size = 24, rotate = 0, color = "grey-100" }: IPhonelinkLockIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19 1.38318H9C7.9 1.38318 7 2.28318 7 3.38318V5.38318C7 5.93318 7.45 6.38318 8 6.38318C8.55 6.38318 9 5.93318 9 5.38318V4.38318H19V20.3832H9V19.3832C9 18.8332 8.55 18.3832 8 18.3832C7.45 18.3832 7 18.8332 7 19.3832V21.3832C7 22.4832 7.9 23.3832 9 23.3832H19C20.1 23.3832 21 22.4832 21 21.3832V3.38318C21 2.28318 20.1 1.38318 19 1.38318ZM10.8 11.3832V9.88318C10.8 8.48318 9.4 7.38318 8 7.38318C6.6 7.38318 5.2 8.48318 5.2 9.88318V11.3832C4.6 11.3832 4 11.9832 4 12.5832V16.0832C4 16.7832 4.6 17.3832 5.2 17.3832H10.7C11.4 17.3832 12 16.7832 12 16.1832V12.6832C12 11.9832 11.4 11.3832 10.8 11.3832ZM9.5 11.3832H6.5V9.88318C6.5 9.08318 7.2 8.58318 8 8.58318C8.8 8.58318 9.5 9.08318 9.5 9.88318V11.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}
