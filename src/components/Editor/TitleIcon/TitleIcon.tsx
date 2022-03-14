import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface ITitleIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function TitleIcon({ size = 24, rotate = 0, color = "grey-100" }: ITitleIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 5.88318C5 6.71318 5.67 7.38318 6.5 7.38318H10.5V17.8832C10.5 18.7132 11.17 19.3832 12 19.3832C12.83 19.3832 13.5 18.7132 13.5 17.8832V7.38318H17.5C18.33 7.38318 19 6.71318 19 5.88318C19 5.05318 18.33 4.38318 17.5 4.38318H6.5C5.67 4.38318 5 5.05318 5 5.88318Z"
        fill={colorCode}
      />
    </svg>
  )
}
