import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IBluetoothIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function BluetoothIcon({ size = 24, rotate = 0, color = "grey-100" }: IBluetoothIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17 7.38323L12.71 3.09323C12.08 2.46323 11 2.90323 11 3.79323V9.97323L7.11 6.08323C6.72 5.69323 6.09 5.69323 5.7 6.08323C5.31 6.47323 5.31 7.10323 5.7 7.49323L10.59 12.3832L5.7 17.2732C5.31 17.6632 5.31 18.2932 5.7 18.6832C6.09 19.0732 6.72 19.0732 7.11 18.6832L11 14.7932V20.9732C11 21.8632 12.08 22.3132 12.71 21.6832L17 17.3832C17.39 16.9932 17.39 16.3632 17 15.9732L13.41 12.3832L17 8.80323C17.39 8.41323 17.39 7.77323 17 7.38323ZM13 6.21323L14.88 8.09323L13 9.97323V6.21323ZM14.88 16.6732L13 18.5532V14.7932L14.88 16.6732Z"
        fill={colorCode}
      />
    </svg>
  )
}
