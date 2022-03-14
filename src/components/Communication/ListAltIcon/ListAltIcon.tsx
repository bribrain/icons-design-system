import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IListAltIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function ListAltIcon({ size = 24, rotate = 0, color = "grey-100" }: IListAltIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 9.38318H16C16.55 9.38318 17 8.93318 17 8.38318C17 7.83318 16.55 7.38318 16 7.38318H12C11.45 7.38318 11 7.83318 11 8.38318C11 8.93318 11.45 9.38318 12 9.38318ZM12 13.3832H16C16.55 13.3832 17 12.9332 17 12.3832C17 11.8332 16.55 11.3832 16 11.3832H12C11.45 11.3832 11 11.8332 11 12.3832C11 12.9332 11.45 13.3832 12 13.3832ZM12 17.3832H16C16.55 17.3832 17 16.9332 17 16.3832C17 15.8332 16.55 15.3832 16 15.3832H12C11.45 15.3832 11 15.8332 11 16.3832C11 16.9332 11.45 17.3832 12 17.3832ZM7 7.38318H9V9.38318H7V7.38318ZM7 11.3832H9V13.3832H7V11.3832ZM7 15.3832H9V17.3832H7V15.3832ZM20 3.38318H4C3.45 3.38318 3 3.83318 3 4.38318V20.3832C3 20.9332 3.45 21.3832 4 21.3832H20C20.55 21.3832 21 20.9332 21 20.3832V4.38318C21 3.83318 20.55 3.38318 20 3.38318ZM19 19.3832H5V5.38318H19V19.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}
