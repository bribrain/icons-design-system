import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IBubbleChartIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function BubbleChartIcon({ size = 24, rotate = 0, color = "grey-100" }: IBubbleChartIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.2 17.9832C8.96731 17.9832 10.4 16.5505 10.4 14.7832C10.4 13.0159 8.96731 11.5832 7.2 11.5832C5.43269 11.5832 4 13.0159 4 14.7832C4 16.5505 5.43269 17.9832 7.2 17.9832Z" fill={colorCode} />
      <path d="M14.8 20.3832C15.9046 20.3832 16.8 19.4877 16.8 18.3832C16.8 17.2786 15.9046 16.3832 14.8 16.3832C13.6955 16.3832 12.8 17.2786 12.8 18.3832C12.8 19.4877 13.6955 20.3832 14.8 20.3832Z" fill={colorCode} />
      <path d="M15.2 13.9832C17.851 13.9832 20 11.8341 20 9.18318C20 6.53221 17.851 4.38318 15.2 4.38318C12.5491 4.38318 10.4 6.53221 10.4 9.18318C10.4 11.8341 12.5491 13.9832 15.2 13.9832Z" fill={colorCode} />
    </svg>
  )
}
