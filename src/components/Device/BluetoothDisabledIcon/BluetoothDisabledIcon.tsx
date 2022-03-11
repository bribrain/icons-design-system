import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IBluetoothDisabledIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function BluetoothDisabledIcon({ size = 24, rotate = 0, color = "grey-100" }: IBluetoothDisabledIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.29 18.2732L6.10997 5.08323C5.71997 4.69323 5.08997 4.69323 4.69997 5.08323C4.30997 5.47323 4.30997 6.10323 4.69997 6.49323L10.59 12.3832L5.69997 17.2732C5.30997 17.6632 5.30997 18.2932 5.69997 18.6832C6.08997 19.0732 6.71997 19.0732 7.10997 18.6832L11 14.7932V20.9732C11 21.8632 12.08 22.3132 12.71 21.6832L16.3 18.0932L17.89 19.6832C18.28 20.0732 18.91 20.0732 19.3 19.6832C19.68 19.2932 19.68 18.6532 19.29 18.2732ZM13 18.5532V14.7932L14.88 16.6732L13 18.5532ZM13 6.21323L14.88 8.09323L13.41 9.56323L14.82 10.9732L17 8.80323C17.39 8.41323 17.39 7.78323 17 7.38323L12.71 3.09323C12.08 2.46323 11 2.90323 11 3.79323V7.15323L13 9.15323V6.21323Z"
        fill={colorCode}
      />
    </svg>
  )
}
