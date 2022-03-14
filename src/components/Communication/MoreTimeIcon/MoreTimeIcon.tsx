import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IMoreTimeIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function MoreTimeIcon({ size = 24, rotate = 0, color = "grey-100" }: IMoreTimeIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.75 8.38318C10.34 8.38318 10 8.72318 10 9.13318V13.8232C10 14.1732 10.18 14.4932 10.47 14.6732L14.11 16.9132C14.44 17.1132 14.87 17.0232 15.08 16.7032C15.31 16.3632 15.2 15.9032 14.85 15.6932L11.5 13.6832V9.13318C11.5 8.72318 11.16 8.38318 10.75 8.38318Z"
        fill={colorCode}
      />
      <path
        d="M17.92 12.3832C17.97 12.7132 18 13.0432 18 13.3832C18 17.2832 14.9 20.3832 11 20.3832C7.1 20.3832 4 17.2832 4 13.3832C4 9.48318 7.1 6.38318 11 6.38318C11.7 6.38318 12.37 6.48318 13 6.67318V4.61318C12.36 4.46318 11.69 4.38318 11 4.38318C6 4.38318 2 8.38318 2 13.3832C2 18.3832 6 22.3832 11 22.3832C16 22.3832 20 18.3832 20 13.3832C20 13.0432 19.98 12.7132 19.94 12.3832H17.92Z"
        fill={colorCode}
      />
      <path
        d="M22 5.38318H20V3.38318C20 2.83318 19.55 2.38318 19 2.38318C18.45 2.38318 18 2.83318 18 3.38318V5.38318H16C15.45 5.38318 15 5.83318 15 6.38318C15 6.93318 15.45 7.38318 16 7.38318H18V9.38318C18 9.93318 18.45 10.3832 19 10.3832C19.55 10.3832 20 9.93318 20 9.38318V7.38318H22C22.55 7.38318 23 6.93318 23 6.38318C23 5.83318 22.55 5.38318 22 5.38318Z"
        fill={colorCode}
      />
    </svg>
  )
}
