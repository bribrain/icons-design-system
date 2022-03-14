import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IGraphicEqIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function GraphicEqIcon({ size = 24, rotate = 0, color = "grey-100" }: IGraphicEqIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 18.3832C8.55 18.3832 9 17.9332 9 17.3832V7.38318C9 6.83318 8.55 6.38318 8 6.38318C7.45 6.38318 7 6.83318 7 7.38318V17.3832C7 17.9332 7.45 18.3832 8 18.3832ZM12 22.3832C12.55 22.3832 13 21.9332 13 21.3832V3.38318C13 2.83318 12.55 2.38318 12 2.38318C11.45 2.38318 11 2.83318 11 3.38318V21.3832C11 21.9332 11.45 22.3832 12 22.3832ZM4 14.3832C4.55 14.3832 5 13.9332 5 13.3832V11.3832C5 10.8332 4.55 10.3832 4 10.3832C3.45 10.3832 3 10.8332 3 11.3832V13.3832C3 13.9332 3.45 14.3832 4 14.3832ZM16 18.3832C16.55 18.3832 17 17.9332 17 17.3832V7.38318C17 6.83318 16.55 6.38318 16 6.38318C15.45 6.38318 15 6.83318 15 7.38318V17.3832C15 17.9332 15.45 18.3832 16 18.3832ZM19 11.3832V13.3832C19 13.9332 19.45 14.3832 20 14.3832C20.55 14.3832 21 13.9332 21 13.3832V11.3832C21 10.8332 20.55 10.3832 20 10.3832C19.45 10.3832 19 10.8332 19 11.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}
