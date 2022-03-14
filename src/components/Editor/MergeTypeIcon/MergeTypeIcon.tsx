import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IMergeTypeIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function MergeTypeIcon({ size = 24, rotate = 0, color = "grey-100" }: IMergeTypeIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.7001 20.0832C18.0901 19.6932 18.0901 19.0632 17.7001 18.6732L15.0001 15.9732L13.5901 17.3832L16.2901 20.0832C16.6801 20.4732 17.3201 20.4732 17.7001 20.0832ZM8.71006 8.38317H11.0001V13.9732L6.29006 18.6732C5.90006 19.0632 5.90006 19.6932 6.29006 20.0832C6.68006 20.4732 7.31006 20.4732 7.70006 20.0832L12.4101 15.3832C12.7901 15.0032 13.0001 14.5032 13.0001 13.9732V8.38317H15.2901C15.7401 8.38317 15.9601 7.84317 15.6401 7.53317L12.3501 4.24317C12.1501 4.04317 11.8401 4.04317 11.6401 4.24317L8.35006 7.53317C8.04006 7.84317 8.26006 8.38317 8.71006 8.38317Z"
        fill={colorCode}
      />
    </svg>
  )
}
