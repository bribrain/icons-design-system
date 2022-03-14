import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IBrightnessHighIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function BrightnessHighIcon({ size = 24, rotate = 0, color = "grey-100" }: IBrightnessHighIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 9.07319V6.38319C20 5.28319 19.1 4.38319 18 4.38319H15.31L13.41 2.48319C12.63 1.70319 11.36 1.70319 10.58 2.48319L8.69001 4.38319H6.00001C4.90001 4.38319 4.00001 5.28319 4.00001 6.38319V9.07319L2.10001 10.9732C1.32001 11.7532 1.32001 13.0232 2.10001 13.8032L4.00001 15.7032V18.3832C4.00001 19.4832 4.90001 20.3832 6.00001 20.3832H8.69001L10.59 22.2832C11.37 23.0632 12.64 23.0632 13.42 22.2832L15.32 20.3832H18C19.1 20.3832 20 19.4832 20 18.3832V15.6932L21.9 13.7932C22.68 13.0132 22.68 11.7432 21.9 10.9632L20 9.07319ZM12 18.3832C8.69001 18.3832 6.00001 15.6932 6.00001 12.3832C6.00001 9.07319 8.69001 6.38319 12 6.38319C15.31 6.38319 18 9.07319 18 12.3832C18 15.6932 15.31 18.3832 12 18.3832ZM12 8.38319C9.79001 8.38319 8.00001 10.1732 8.00001 12.3832C8.00001 14.5932 9.79001 16.3832 12 16.3832C14.21 16.3832 16 14.5932 16 12.3832C16 10.1732 14.21 8.38319 12 8.38319Z"
        fill={colorCode}
      />
    </svg>
  )
}
