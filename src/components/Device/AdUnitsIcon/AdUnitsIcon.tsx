import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IAdUnitsIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function AdUnitsIcon({ size = 24, rotate = 0, color = "grey-100" }: IAdUnitsIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17 1.38318H7C5.9 1.38318 5 2.28318 5 3.38318V21.3832C5 22.4832 5.9 23.3832 7 23.3832H17C18.1 23.3832 19 22.4832 19 21.3832V3.38318C19 2.28318 18.1 1.38318 17 1.38318ZM16 19.3832H8C7.45 19.3832 7 18.9332 7 18.3832V6.38318C7 5.83318 7.45 5.38318 8 5.38318H16C16.55 5.38318 17 5.83318 17 6.38318V18.3832C17 18.9332 16.55 19.3832 16 19.3832Z"
        fill={colorCode}
      />
      <path d="M15 6.38318H9C8.45 6.38318 8 6.83318 8 7.38318C8 7.93318 8.45 8.38318 9 8.38318H15C15.55 8.38318 16 7.93318 16 7.38318C16 6.83318 15.55 6.38318 15 6.38318Z" fill={colorCode} />
    </svg>
  )
}
