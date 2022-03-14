import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface ITableChartIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function TableChartIcon({ size = 24, rotate = 0, color = "grey-100" }: ITableChartIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 10.4032H15V21.3832H10V10.4032ZM17 21.3832H20C21.1 21.3832 22 20.4832 22 19.3832V10.3832H17V21.3832ZM20 3.38318H5C3.9 3.38318 3 4.28318 3 5.38318V8.38318H22V5.38318C22 4.28318 21.1 3.38318 20 3.38318ZM3 19.3832C3 20.4832 3.9 21.3832 5 21.3832H8V10.3832H3V19.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}
