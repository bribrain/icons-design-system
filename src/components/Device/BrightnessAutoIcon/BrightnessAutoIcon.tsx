import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IBrightnessAutoIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function BrightnessAutoIcon({ size = 24, rotate = 0, color = "grey-100" }: IBrightnessAutoIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.85 13.0332H13.15L12 9.38319L10.85 13.0332ZM20 9.07319V6.38319C20 5.28319 19.1 4.38319 18 4.38319H15.31L13.41 2.48319C12.63 1.70319 11.36 1.70319 10.58 2.48319L8.69001 4.38319H6.00001C4.90001 4.38319 4.00001 5.28319 4.00001 6.38319V9.07319L2.10001 10.9732C1.32001 11.7532 1.32001 13.0232 2.10001 13.8032L4.00001 15.7032V18.3832C4.00001 19.4832 4.90001 20.3832 6.00001 20.3832H8.69001L10.59 22.2832C11.37 23.0632 12.64 23.0632 13.42 22.2832L15.32 20.3832H18C19.1 20.3832 20 19.4832 20 18.3832V15.6932L21.9 13.7932C22.68 13.0132 22.68 11.7432 21.9 10.9632L20 9.07319ZM14.09 15.7832L13.6 14.3832H10.4L9.91001 15.7832C9.78001 16.1432 9.45001 16.3832 9.07001 16.3832C8.45001 16.3832 8.02001 15.7732 8.23001 15.1932L10.67 8.33319C10.87 7.76319 11.4 7.38319 12 7.38319C12.6 7.38319 13.13 7.76319 13.34 8.32319L15.78 15.1832C15.99 15.7632 15.56 16.3732 14.94 16.3732C14.55 16.3832 14.22 16.1432 14.09 15.7832Z"
        fill={colorCode}
      />
    </svg>
  )
}
