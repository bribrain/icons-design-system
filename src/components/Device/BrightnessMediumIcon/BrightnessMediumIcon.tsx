import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IBrightnessMediumIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function BrightnessMediumIcon({ size = 24, rotate = 0, color = "grey-100" }: IBrightnessMediumIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 15.6932L21.9 13.7932C22.68 13.0132 22.68 11.7432 21.9 10.9632L20 9.07319V6.38319C20 5.28319 19.1 4.38319 18 4.38319H15.31L13.41 2.48319C12.63 1.70319 11.36 1.70319 10.58 2.48319L8.69001 4.38319H6.00001C4.90001 4.38319 4.00001 5.28319 4.00001 6.38319V9.07319L2.10001 10.9732C1.32001 11.7532 1.32001 13.0232 2.10001 13.8032L4.00001 15.7032V18.3832C4.00001 19.4832 4.90001 20.3832 6.00001 20.3832H8.69001L10.59 22.2832C11.37 23.0632 12.64 23.0632 13.42 22.2832L15.32 20.3832H18C19.1 20.3832 20 19.4832 20 18.3832V15.6932ZM12 17.2832V7.48319C12 6.87319 12.55 6.37319 13.15 6.49319C15.91 7.03319 18 9.46319 18 12.3832C18 15.3032 15.91 17.7332 13.15 18.2732C12.55 18.3932 12 17.8932 12 17.2832Z"
        fill={colorCode}
      />
    </svg>
  )
}
