import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface ICallMadeIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function CallMadeIcon({ size = 24, rotate = 0, color = "grey-100" }: ICallMadeIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.99997 6.38318C8.99997 6.94318 9.44997 7.38318 9.99997 7.38318H15.59L4.69997 18.2732C4.30997 18.6632 4.30997 19.2932 4.69997 19.6832C5.08997 20.0732 5.71997 20.0732 6.10997 19.6832L17 8.79318V14.3832C17 14.9332 17.45 15.3832 18 15.3832C18.55 15.3832 19 14.9332 19 14.3832V6.38318C19 5.83318 18.55 5.38318 18 5.38318H9.99997C9.44997 5.38318 8.99997 5.83318 8.99997 6.38318Z"
        fill={colorCode}
      />
    </svg>
  )
}
