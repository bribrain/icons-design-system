import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface ICallSplitIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function CallSplitIcon({ size = 24, rotate = 0, color = "grey-100" }: ICallSplitIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.85 5.23318L16.29 6.67318L13.41 9.55318L14.83 10.9732L17.71 8.09318L19.15 9.53318C19.46 9.84318 20 9.62318 20 9.17318V4.88318C20 4.60318 19.78 4.38318 19.5 4.38318H15.21C14.76 4.38318 14.54 4.92318 14.85 5.23318ZM8.79 4.38318H4.5C4.22 4.38318 4 4.60318 4 4.88318V9.17318C4 9.62318 4.54 9.84318 4.85 9.52318L6.29 8.08318L11 12.7832V19.3832C11 19.9332 11.45 20.3832 12 20.3832C12.55 20.3832 13 19.9332 13 19.3832V12.3832C13 12.1232 12.89 11.8632 12.71 11.6732L7.71 6.66318L9.15 5.22318C9.46 4.92318 9.24 4.38318 8.79 4.38318Z"
        fill={colorCode}
      />
    </svg>
  )
}
