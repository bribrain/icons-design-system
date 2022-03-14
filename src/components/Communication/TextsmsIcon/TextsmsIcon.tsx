import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface ITextsmsIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function TextsmsIcon({ size = 24, rotate = 0, color = "grey-100" }: ITextsmsIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 2.38318H4C2.9 2.38318 2.01 3.28318 2.01 4.38318L2 22.3832L6 18.3832H20C21.1 18.3832 22 17.4832 22 16.3832V4.38318C22 3.28318 21.1 2.38318 20 2.38318ZM9 11.3832H7V9.38318H9V11.3832ZM13 11.3832H11V9.38318H13V11.3832ZM17 11.3832H15V9.38318H17V11.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}
