import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IPhoneDisabledIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function PhoneDisabledIcon({ size = 24, rotate = 0, color = "grey-100" }: IPhoneDisabledIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.54 17.7532C11.91 19.8332 8.65 21.1432 5.09 21.3632C3.96 21.4332 3.02 20.4932 3.02 19.3632V17.6332C3.01 16.6232 3.77 15.7732 4.78 15.6532L7.32 15.3632C7.93 15.2932 8.53 15.5032 8.96 15.9332L10.8 17.7732C11.61 17.3632 12.39 16.8732 13.11 16.3232L2.1 5.3132C1.71 4.9232 1.71 4.2932 2.1 3.9032C2.49 3.5132 3.13 3.5132 3.52 3.9032L20.49 20.8832C20.88 21.2732 20.88 21.9032 20.49 22.2932C20.1 22.6832 19.47 22.6832 19.08 22.2932L14.54 17.7532ZM17.39 11.1832L15.54 9.3332C15.11 8.9032 14.9 8.3032 14.97 7.6932L15.26 5.1732C15.38 4.1632 16.23 3.4032 17.25 3.4032H18.98C20.11 3.4032 21.05 4.3432 20.98 5.4732C20.76 9.0432 19.44 12.3032 17.36 14.9432L15.93 13.5132C16.48 12.7832 16.97 12.0032 17.39 11.1832Z"
        fill={colorCode}
      />
    </svg>
  )
}
