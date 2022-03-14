import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface ISwapCallsIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function SwapCallsIcon({ size = 24, rotate = 0, color = "grey-100" }: ISwapCallsIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.65 4.7332L14.86 7.5232C14.54 7.8432 14.76 8.3832 15.21 8.3832H17V15.2632C17 16.2632 16.33 17.1932 15.34 17.3532C14.09 17.5632 13 16.5932 13 15.3832V8.5532C13 6.4632 11.47 4.6032 9.39003 4.4032C7.01003 4.1732 5.00003 6.0432 5.00003 8.3832V15.3832H3.21003C2.76003 15.3832 2.54003 15.9232 2.86003 16.2332L5.65003 19.0232C5.85003 19.2232 6.16003 19.2232 6.36003 19.0232L9.15003 16.2332C9.46003 15.9232 9.24003 15.3832 8.79003 15.3832H7.00003V8.5032C7.00003 7.5032 7.67003 6.5732 8.66003 6.4132C9.91003 6.2032 11 7.1732 11 8.3832V15.2132C11 17.3032 12.53 19.1632 14.61 19.3632C16.99 19.5932 19 17.7232 19 15.3832V8.3832H20.79C21.24 8.3832 21.46 7.8432 21.14 7.5332L18.35 4.7432C18.16 4.5432 17.84 4.5432 17.65 4.7332Z"
        fill={colorCode}
      />
    </svg>
  )
}
