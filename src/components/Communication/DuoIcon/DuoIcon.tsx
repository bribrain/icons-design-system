import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IDuoIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function DuoIcon({ size = 24, rotate = 0, color = "grey-100" }: IDuoIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 2.38318H12C6.38 2.38318 2 7.04318 2 12.6632C2 17.8832 6.49 22.3832 11.72 22.3832C17.39 22.3832 22 18.0032 22 12.3832V4.38318C22 3.28318 21.1 2.38318 20 2.38318ZM17 15.3832L14 13.3832V15.3832H7V9.38318H14V11.3832L17 9.38318V15.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}
