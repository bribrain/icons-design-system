import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface ICallReceivedIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function CallReceivedIcon({ size = 24, rotate = 0, color = "grey-100" }: ICallReceivedIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.3 5.09316C18.91 4.70316 18.28 4.70316 17.89 5.09316L7 15.9732V10.3832C7 9.83316 6.55 9.38316 6 9.38316C5.45 9.38316 5 9.83316 5 10.3832V18.3832C5 18.9332 5.45 19.3832 6 19.3832H14C14.55 19.3832 15 18.9332 15 18.3832C15 17.8332 14.55 17.3832 14 17.3832H8.41L19.3 6.49316C19.68 6.11316 19.68 5.47316 19.3 5.09316Z"
        fill={colorCode}
      />
    </svg>
  )
}
