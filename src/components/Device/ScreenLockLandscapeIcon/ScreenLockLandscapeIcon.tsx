import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IScreenLockLandscapeIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function ScreenLockLandscapeIcon({ size = 24, rotate = 0, color = "grey-100" }: IScreenLockLandscapeIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21 5.38318H3C1.9 5.38318 1 6.28318 1 7.38318V17.3832C1 18.4832 1.9 19.3832 3 19.3832H21C22.1 19.3832 23 18.4832 23 17.3832V7.38318C23 6.28318 22.1 5.38318 21 5.38318ZM19 17.3832H5V7.38318H19V17.3832ZM10 16.3832H14C14.55 16.3832 15 15.9332 15 15.3832V12.3832C15 11.8332 14.55 11.3832 14 11.3832V10.3832C14 9.27318 13.1 8.38318 12 8.38318C10.89 8.38318 10 9.28318 10 10.3832V11.3832C9.45 11.3832 9 11.8332 9 12.3832V15.3832C9 15.9332 9.45 16.3832 10 16.3832ZM10.8 10.3832C10.8 9.72318 11.34 9.18318 12 9.18318C12.66 9.18318 13.2 9.72318 13.2 10.3832V11.3832H10.8V10.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}
