import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IHorizontalRuleIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function HorizontalRuleIcon({ size = 24, rotate = 0, color = "grey-100" }: IHorizontalRuleIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M19 13.3832H5C4.45 13.3832 4 12.9332 4 12.3832C4 11.8332 4.45 11.3832 5 11.3832H19C19.55 11.3832 20 11.8332 20 12.3832C20 12.9332 19.55 13.3832 19 13.3832Z" fill={colorCode} />
    </svg>
  )
}
