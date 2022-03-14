import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IDragHandleIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function DragHandleIcon({ size = 24, rotate = 0, color = "grey-100" }: IDragHandleIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19 9.38318H5C4.45 9.38318 4 9.83318 4 10.3832C4 10.9332 4.45 11.3832 5 11.3832H19C19.55 11.3832 20 10.9332 20 10.3832C20 9.83318 19.55 9.38318 19 9.38318ZM5 15.3832H19C19.55 15.3832 20 14.9332 20 14.3832C20 13.8332 19.55 13.3832 19 13.3832H5C4.45 13.3832 4 13.8332 4 14.3832C4 14.9332 4.45 15.3832 5 15.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}
