import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IWidgetsIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function WidgetsIcon({ size = 24, rotate = 0, color = "grey-100" }: IWidgetsIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13 14.3832V20.3832C13 20.9332 13.45 21.3832 14 21.3832H20C20.55 21.3832 21 20.9332 21 20.3832V14.3832C21 13.8332 20.55 13.3832 20 13.3832H14C13.45 13.3832 13 13.8332 13 14.3832ZM4 21.3832H10C10.55 21.3832 11 20.9332 11 20.3832V14.3832C11 13.8332 10.55 13.3832 10 13.3832H4C3.45 13.3832 3 13.8332 3 14.3832V20.3832C3 20.9332 3.45 21.3832 4 21.3832ZM3 4.38316V10.3832C3 10.9332 3.45 11.3832 4 11.3832H10C10.55 11.3832 11 10.9332 11 10.3832V4.38316C11 3.83316 10.55 3.38316 10 3.38316H4C3.45 3.38316 3 3.83316 3 4.38316ZM15.95 2.78316L11.7 7.02316C11.31 7.41316 11.31 8.04316 11.7 8.43316L15.95 12.6832C16.34 13.0732 16.97 13.0732 17.36 12.6832L21.61 8.43316C22 8.04316 22 7.41316 21.61 7.02316L17.37 2.78316C16.98 2.39316 16.34 2.39316 15.95 2.78316Z"
        fill={colorCode}
      />
    </svg>
  )
}
