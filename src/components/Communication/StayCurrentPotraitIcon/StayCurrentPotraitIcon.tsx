import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IStayCurrentPotraitIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function StayCurrentPotraitIcon({ size = 24, rotate = 0, color = "grey-100" }: IStayCurrentPotraitIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17 1.39318L7.00001 1.38318C5.90001 1.38318 5.01001 2.28318 5.01001 3.38318V21.3832C5.01001 22.4832 5.90001 23.3832 7.00001 23.3832H17C18.1 23.3832 19 22.4832 19 21.3832V3.38318C19 2.28318 18.1 1.39318 17 1.39318ZM17 19.3832H7.00001V5.38318H17V19.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}
