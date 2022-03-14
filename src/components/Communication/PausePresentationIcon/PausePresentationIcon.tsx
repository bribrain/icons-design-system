import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IPausePresentationIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function PausePresentationIcon({ size = 24, rotate = 0, color = "grey-100" }: IPausePresentationIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21 3.38318H3C1.9 3.38318 1 4.28318 1 5.38318V19.3832C1 20.4832 1.9 21.3832 3 21.3832H21C22.1 21.3832 23 20.4832 23 19.3832V5.38318C23 4.28318 22.1 3.38318 21 3.38318ZM21 18.3832C21 18.9332 20.55 19.3832 20 19.3832H4C3.45 19.3832 3 18.9332 3 18.3832V6.38318C3 5.83318 3.45 5.38318 4 5.38318H20C20.55 5.38318 21 5.83318 21 6.38318V18.3832ZM10 8.38318C9.45 8.38318 9 8.83318 9 9.38318V15.3832C9 15.9332 9.45 16.3832 10 16.3832C10.55 16.3832 11 15.9332 11 15.3832V9.38318C11 8.83318 10.55 8.38318 10 8.38318ZM14 8.38318C13.45 8.38318 13 8.83318 13 9.38318V15.3832C13 15.9332 13.45 16.3832 14 16.3832C14.55 16.3832 15 15.9332 15 15.3832V9.38318C15 8.83318 14.55 8.38318 14 8.38318Z"
        fill={colorCode}
      />
    </svg>
  )
}
