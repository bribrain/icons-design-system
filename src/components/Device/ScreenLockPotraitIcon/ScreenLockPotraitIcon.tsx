import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IScreenLockPotraitIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function ScreenLockPotraitIcon({ size = 24, rotate = 0, color = "grey-100" }: IScreenLockPotraitIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 16.3832H14C14.55 16.3832 15 15.9332 15 15.3832V12.3832C15 11.8332 14.55 11.3832 14 11.3832V10.3832C14 9.27318 13.1 8.38318 12 8.38318C10.89 8.38318 10 9.28318 10 10.3832V11.3832C9.45 11.3832 9 11.8332 9 12.3832V15.3832C9 15.9332 9.45 16.3832 10 16.3832ZM10.8 10.3832C10.8 9.72318 11.34 9.18318 12 9.18318C12.66 9.18318 13.2 9.72318 13.2 10.3832V11.3832H10.8V10.3832ZM17 1.38318H7C5.9 1.38318 5 2.28318 5 3.38318V21.3832C5 22.4832 5.9 23.3832 7 23.3832H17C18.1 23.3832 19 22.4832 19 21.3832V3.38318C19 2.28318 18.1 1.38318 17 1.38318ZM17 19.3832H7V5.38318H17V19.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}
