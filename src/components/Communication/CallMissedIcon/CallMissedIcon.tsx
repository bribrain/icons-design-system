import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface ICallMissedIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function CallMissedIcon({ size = 24, rotate = 0, color = "grey-100" }: ICallMissedIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.89 8.08318L12 14.9732L6.41 9.38318H10C10.55 9.38318 11 8.93318 11 8.38318C11 7.83318 10.55 7.38318 10 7.38318H4C3.45 7.38318 3 7.83318 3 8.38318V14.3832C3 14.9332 3.45 15.3832 4 15.3832C4.55 15.3832 5 14.9332 5 14.3832V10.7932L11.29 17.0832C11.68 17.4732 12.31 17.4732 12.7 17.0832L20.29 9.49318C20.68 9.10318 20.68 8.47318 20.29 8.08318C19.91 7.70318 19.27 7.70318 18.89 8.08318Z"
        fill={colorCode}
      />
    </svg>
  )
}
