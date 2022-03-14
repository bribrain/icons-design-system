import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface ISignalCellularAltIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function SignalCellularAltIcon({ size = 24, rotate = 0, color = "grey-100" }: ISignalCellularAltIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.5 4.38318C19.33 4.38318 20 5.05318 20 5.88318V18.8832C20 19.7132 19.33 20.3832 18.5 20.3832C17.67 20.3832 17 19.7132 17 18.8832V5.88318C17 5.05318 17.67 4.38318 18.5 4.38318ZM6.5 14.3832C7.33 14.3832 8 15.0532 8 15.8832V18.8832C8 19.7132 7.33 20.3832 6.5 20.3832C5.67 20.3832 5 19.7132 5 18.8832V15.8832C5 15.0532 5.67 14.3832 6.5 14.3832ZM12.5 9.38318C13.33 9.38318 14 10.0532 14 10.8832V18.8832C14 19.7132 13.33 20.3832 12.5 20.3832C11.67 20.3832 11 19.7132 11 18.8832V10.8832C11 10.0532 11.67 9.38318 12.5 9.38318Z"
        fill={colorCode}
      />
    </svg>
  )
}
