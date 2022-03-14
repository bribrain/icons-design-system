import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IPhoneEnabledIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function PhoneEnabledIcon({ size = 24, rotate = 0, color = "grey-100" }: IPhoneEnabledIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.78 15.6532L7.32 15.3632C7.93 15.2932 8.53 15.5032 8.96 15.9332L10.8 17.7732C13.63 16.3332 15.95 14.0232 17.39 11.1832L15.54 9.3332C15.11 8.9032 14.9 8.3032 14.97 7.6932L15.26 5.1732C15.38 4.1632 16.23 3.4032 17.25 3.4032H18.98C20.11 3.4032 21.05 4.3432 20.98 5.4732C20.45 14.0132 13.62 20.8332 5.09 21.3632C3.96 21.4332 3.02 20.4932 3.02 19.3632V17.6332C3.01 16.6232 3.77 15.7732 4.78 15.6532Z"
        fill={colorCode}
      />
    </svg>
  )
}
