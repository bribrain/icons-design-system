import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IPresentToAllIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function PresentToAllIcon({ size = 24, rotate = 0, color = "grey-100" }: IPresentToAllIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21 3.38318H3C1.89 3.38318 1 4.27318 1 5.38318V19.3832C1 20.4932 1.89 21.3832 3 21.3832H21C22.11 21.3832 23 20.4932 23 19.3832V5.38318C23 4.27318 22.11 3.38318 21 3.38318ZM20 19.4032H4C3.45 19.4032 3 18.9532 3 18.4032V6.36318C3 5.81318 3.45 5.36318 4 5.36318H20C20.55 5.36318 21 5.81318 21 6.36318V18.4032C21 18.9532 20.55 19.4032 20 19.4032ZM10 12.3832H8L11.65 8.73318C11.85 8.53318 12.16 8.53318 12.36 8.73318L16 12.3832H14V16.3832H10V12.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}
