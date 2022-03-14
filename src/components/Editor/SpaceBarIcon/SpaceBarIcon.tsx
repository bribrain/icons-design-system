import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface ISpaceBarIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function SpaceBarIcon({ size = 24, rotate = 0, color = "grey-100" }: ISpaceBarIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 10.3832V13.3832H6V10.3832C6 9.83318 5.55 9.38318 5 9.38318C4.45 9.38318 4 9.83318 4 10.3832V14.3832C4 14.9332 4.45 15.3832 5 15.3832H19C19.55 15.3832 20 14.9332 20 14.3832V10.3832C20 9.83318 19.55 9.38318 19 9.38318C18.45 9.38318 18 9.83318 18 10.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}
