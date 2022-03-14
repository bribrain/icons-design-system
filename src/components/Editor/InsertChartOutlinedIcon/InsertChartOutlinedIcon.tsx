import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IInsertChartOutlinedIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function InsertChartOutlinedIcon({ size = 24, rotate = 0, color = "grey-100" }: IInsertChartOutlinedIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 17.3832C7.45 17.3832 7 16.9332 7 16.3832V11.3832C7 10.8332 7.45 10.3832 8 10.3832C8.55 10.3832 9 10.8332 9 11.3832V16.3832C9 16.9332 8.55 17.3832 8 17.3832ZM12 17.3832C11.45 17.3832 11 16.9332 11 16.3832V8.38318C11 7.83318 11.45 7.38318 12 7.38318C12.55 7.38318 13 7.83318 13 8.38318V16.3832C13 16.9332 12.55 17.3832 12 17.3832ZM16 17.3832C15.45 17.3832 15 16.9332 15 16.3832V14.3832C15 13.8332 15.45 13.3832 16 13.3832C16.55 13.3832 17 13.8332 17 14.3832V16.3832C17 16.9332 16.55 17.3832 16 17.3832ZM18 19.3832H6C5.45 19.3832 5 18.9332 5 18.3832V6.38318C5 5.83318 5.45 5.38318 6 5.38318H18C18.55 5.38318 19 5.83318 19 6.38318V18.3832C19 18.9332 18.55 19.3832 18 19.3832ZM19 3.38318H5C3.9 3.38318 3 4.28318 3 5.38318V19.3832C3 20.4832 3.9 21.3832 5 21.3832H19C20.1 21.3832 21 20.4832 21 19.3832V5.38318C21 4.28318 20.1 3.38318 19 3.38318Z"
        fill={colorCode}
      />
    </svg>
  )
}
