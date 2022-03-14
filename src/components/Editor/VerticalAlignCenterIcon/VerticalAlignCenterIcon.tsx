import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IVerticalAlignCenterIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function VerticalAlignCenterIcon({ size = 24, rotate = 0, color = "grey-100" }: IVerticalAlignCenterIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.21 19.3832H11V22.3832C11 22.9332 11.45 23.3832 12 23.3832C12.55 23.3832 13 22.9332 13 22.3832V19.3832H14.79C15.24 19.3832 15.46 18.8432 15.14 18.5332L12.35 15.7432C12.15 15.5432 11.84 15.5432 11.64 15.7432L8.85 18.5332C8.54 18.8432 8.76 19.3832 9.21 19.3832ZM14.79 5.38318H13V2.38318C13 1.83318 12.55 1.38318 12 1.38318C11.45 1.38318 11 1.83318 11 2.38318V5.38318H9.21C8.76 5.38318 8.54 5.92318 8.85 6.23318L11.64 9.02318C11.84 9.22318 12.15 9.22318 12.35 9.02318L15.14 6.23318C15.46 5.92318 15.24 5.38318 14.79 5.38318ZM4 12.3832C4 12.9332 4.45 13.3832 5 13.3832H19C19.55 13.3832 20 12.9332 20 12.3832C20 11.8332 19.55 11.3832 19 11.3832H5C4.45 11.3832 4 11.8332 4 12.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}
