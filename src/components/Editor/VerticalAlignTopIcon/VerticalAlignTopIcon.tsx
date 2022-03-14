import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IVerticalAlignTopIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function VerticalAlignTopIcon({ size = 24, rotate = 0, color = "grey-100" }: IVerticalAlignTopIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.21 11.3832H11V20.3832C11 20.9332 11.45 21.3832 12 21.3832C12.55 21.3832 13 20.9332 13 20.3832V11.3832H14.79C15.24 11.3832 15.46 10.8432 15.14 10.5332L12.35 7.74318C12.15 7.54318 11.84 7.54318 11.64 7.74318L8.85 10.5332C8.54 10.8432 8.76 11.3832 9.21 11.3832ZM4 4.38318C4 4.93318 4.45 5.38318 5 5.38318H19C19.55 5.38318 20 4.93318 20 4.38318C20 3.83318 19.55 3.38318 19 3.38318H5C4.45 3.38318 4 3.83318 4 4.38318Z"
        fill={colorCode}
      />
    </svg>
  )
}
