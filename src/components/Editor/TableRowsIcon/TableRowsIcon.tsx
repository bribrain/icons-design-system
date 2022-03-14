import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface ITableRowsIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function TableRowsIcon({ size = 24, rotate = 0, color = "grey-100" }: ITableRowsIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 7.38318H4C2.9 7.38318 2 6.48318 2 5.38318V4.38318C2 3.28318 2.9 2.38318 4 2.38318H20C21.1 2.38318 22 3.28318 22 4.38318V5.38318C22 6.48318 21.1 7.38318 20 7.38318ZM20 9.88318H4C2.9 9.88318 2 10.7832 2 11.8832V12.8832C2 13.9832 2.9 14.8832 4 14.8832H20C21.1 14.8832 22 13.9832 22 12.8832V11.8832C22 10.7832 21.1 9.88318 20 9.88318ZM20 17.3832H4C2.9 17.3832 2 18.2832 2 19.3832V20.3832C2 21.4832 2.9 22.3832 4 22.3832H20C21.1 22.3832 22 21.4832 22 20.3832V19.3832C22 18.2832 21.1 17.3832 20 17.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}
