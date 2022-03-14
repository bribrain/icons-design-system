import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface ILocationOnIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function LocationOnIcon({ size = 24, rotate = 0, color = "grey-100" }: ILocationOnIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2.38318C8.13 2.38318 5 5.51318 5 9.38318C5 13.5532 9.42 19.3032 11.24 21.4932C11.64 21.9732 12.37 21.9732 12.77 21.4932C14.58 19.3032 19 13.5532 19 9.38318C19 5.51318 15.87 2.38318 12 2.38318ZM12 11.8832C10.62 11.8832 9.5 10.7632 9.5 9.38318C9.5 8.00318 10.62 6.88318 12 6.88318C13.38 6.88318 14.5 8.00318 14.5 9.38318C14.5 10.7632 13.38 11.8832 12 11.8832Z"
        fill={colorCode}
      />
    </svg>
  )
}
