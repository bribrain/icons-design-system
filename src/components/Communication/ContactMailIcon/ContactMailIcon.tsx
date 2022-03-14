import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IContactMailIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function ContactMailIcon({ size = 24, rotate = 0, color = "grey-100" }: IContactMailIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21 8.38318V7.38318L18 9.38318L15 7.38318V8.38318L17.72 10.2032C17.89 10.3132 18.11 10.3132 18.27 10.2032L21 8.38318ZM22 3.38318H2C0.9 3.38318 0 4.28318 0 5.38318V19.3832C0 20.4832 0.9 21.3832 2 21.3832H22C23.1 21.3832 23.99 20.4832 23.99 19.3832L24 5.38318C24 4.28318 23.1 3.38318 22 3.38318ZM8 6.38318C9.66 6.38318 11 7.72318 11 9.38318C11 11.0432 9.66 12.3832 8 12.3832C6.34 12.3832 5 11.0432 5 9.38318C5 7.72318 6.34 6.38318 8 6.38318ZM14 18.3832H2V17.3832C2 15.3832 6 14.2832 8 14.2832C10 14.2832 14 15.3832 14 17.3832V18.3832ZM21.5 12.3832H14.5C14.22 12.3832 14 12.1632 14 11.8832V6.88318C14 6.60318 14.22 6.38318 14.5 6.38318H21.5C21.78 6.38318 22 6.60318 22 6.88318V11.8832C22 12.1632 21.78 12.3832 21.5 12.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}
