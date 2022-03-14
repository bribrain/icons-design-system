import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IPhonelinkRingIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function PhonelinkRingIcon({ size = 24, rotate = 0, color = "grey-100" }: IPhonelinkRingIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 1.38318H4C2.9 1.38318 2 2.28318 2 3.38318V21.3832C2 22.4832 2.9 23.3832 4 23.3832H14C15.1 23.3832 16 22.4832 16 21.3832V3.38318C16 2.28318 15.1 1.38318 14 1.38318ZM14 20.3832H4V4.38318H14V20.3832ZM20.63 8.64318C20.37 8.32318 19.89 8.28318 19.59 8.58318L19.56 8.61318C19.31 8.86318 19.3 9.26318 19.51 9.54318C20.77 11.1832 20.76 13.4132 19.49 15.1132C19.28 15.3932 19.3 15.7832 19.54 16.0332L19.59 16.0832C19.88 16.3732 20.35 16.3432 20.62 16.0332C22.42 13.9032 22.42 10.8432 20.63 8.64318ZM17.42 10.7532L17.36 10.8132C17.16 11.0132 17.1 11.3132 17.21 11.5732C17.42 12.0632 17.42 12.6032 17.21 13.0932C17.1 13.3532 17.16 13.6532 17.36 13.8532L17.44 13.9332C17.76 14.2532 18.31 14.1832 18.53 13.7832C19.02 12.8932 19.02 11.8432 18.52 10.9232C18.3 10.5032 17.75 10.4232 17.42 10.7532Z"
        fill={colorCode}
      />
    </svg>
  )
}
