import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IPieChartOutlineIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function PieChartOutlineIcon({ size = 24, rotate = 0, color = "grey-100" }: IPieChartOutlineIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2.38318C6.5 2.38318 2 6.88318 2 12.3832C2 17.8832 6.5 22.3832 12 22.3832C17.5 22.3832 22 17.8832 22 12.3832C22 6.88318 17.5 2.38318 12 2.38318ZM13 4.45318C16.61 4.90318 19.48 7.78318 19.93 11.3832H14C13.45 11.3832 13 10.9332 13 10.3832V4.45318ZM4 12.3832C4 8.32318 7.07 4.94318 11 4.45318V20.3232C7.07 19.8232 4 16.4432 4 12.3832ZM13 20.3132V14.3832C13 13.8332 13.45 13.3832 14 13.3832H19.93C19.48 16.9932 16.61 19.8632 13 20.3132Z"
        fill={colorCode}
      />
    </svg>
  )
}
