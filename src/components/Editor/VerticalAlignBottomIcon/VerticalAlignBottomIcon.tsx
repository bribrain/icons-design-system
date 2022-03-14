import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IVerticalAlignBottomIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function VerticalAlignBottomIcon({ size = 24, rotate = 0, color = "grey-100" }: IVerticalAlignBottomIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.79 13.3832H13V4.38318C13 3.83318 12.55 3.38318 12 3.38318C11.45 3.38318 11 3.83318 11 4.38318V13.3832H9.21C8.76 13.3832 8.54 13.9232 8.86 14.2332L11.65 17.0232C11.85 17.2232 12.16 17.2232 12.36 17.0232L15.15 14.2332C15.46 13.9232 15.24 13.3832 14.79 13.3832ZM4 20.3832C4 20.9332 4.45 21.3832 5 21.3832H19C19.55 21.3832 20 20.9332 20 20.3832C20 19.8332 19.55 19.3832 19 19.3832H5C4.45 19.3832 4 19.8332 4 20.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}
