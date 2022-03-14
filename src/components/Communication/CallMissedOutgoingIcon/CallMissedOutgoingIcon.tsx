import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface ICallMissedOutgoingIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function CallMissedOutgoingIcon({ size = 24, rotate = 0, color = "grey-100" }: ICallMissedOutgoingIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.70004 9.49318L11.29 17.0832C11.68 17.4732 12.31 17.4732 12.7 17.0832L19 10.7832V14.3832C19 14.9332 19.45 15.3832 20 15.3832C20.55 15.3832 21 14.9332 21 14.3832V8.38318C21 7.83318 20.55 7.38318 20 7.38318H14C13.45 7.38318 13 7.83318 13 8.38318C13 8.93318 13.45 9.38318 14 9.38318H17.59L12 14.9732L5.11004 8.08318C4.72004 7.69318 4.09004 7.69318 3.70004 8.08318C3.32004 8.47318 3.32004 9.11318 3.70004 9.49318Z"
        fill={colorCode}
      />
    </svg>
  )
}
