import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IMobileOffIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function MobileOffIcon({ size = 24, rotate = 0, color = "grey-100" }: IMobileOffIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17 16.8232L3.61 3.43318C3.22 3.04318 2.59 3.04318 2.2 3.43318C1.81 3.82318 1.81 4.45318 2.2 4.84318L5 7.65318V21.3832C5 22.4832 5.9 23.3832 7 23.3832H17C18.02 23.3832 18.85 22.6132 18.98 21.6332L20 22.6532C20.39 23.0432 21.02 23.0432 21.41 22.6532C21.8 22.2632 21.8 21.6332 21.41 21.2432L19 18.8232L17 16.8232ZM7 19.3832V9.65318L16.73 19.3832H7ZM17 5.38318V13.9932L19 15.9932V3.38318C19 2.28318 18.1 1.38318 17 1.38318H7C6.29 1.38318 5.67 1.75318 5.32 2.31318L8.39 5.38318H17Z"
        fill={colorCode}
      />
    </svg>
  )
}
