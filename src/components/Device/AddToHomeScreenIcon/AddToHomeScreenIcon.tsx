import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IAddToHomeScreenIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function AddToHomeScreenIcon({ size = 24, rotate = 0, color = "grey-100" }: IAddToHomeScreenIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 1.39318L8 1.38318C6.9 1.38318 6 2.28318 6 3.38318V6.38318C6 6.93318 6.45 7.38318 7 7.38318C7.55 7.38318 8 6.93318 8 6.38318V5.38318H18V19.3832H8V18.3832C8 17.8332 7.55 17.3832 7 17.3832C6.45 17.3832 6 17.8332 6 18.3832V21.3832C6 22.4832 6.9 23.3832 8 23.3832H18C19.1 23.3832 20 22.4832 20 21.3832V3.38318C20 2.28318 19.1 1.39318 18 1.39318ZM11 15.3832C11.55 15.3832 12 14.9332 12 14.3832V9.38318C12 8.83318 11.55 8.38318 11 8.38318H6C5.45 8.38318 5 8.83318 5 9.38318C5 9.93318 5.45 10.3832 6 10.3832H8.59L3.7 15.2732C3.31 15.6632 3.31 16.2932 3.7 16.6832C4.09 17.0732 4.72 17.0732 5.11 16.6832L10 11.7932V14.3832C10 14.9332 10.45 15.3832 11 15.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}
