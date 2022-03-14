import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IScatterPlotIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function ScatterPlotIcon({ size = 24, rotate = 0, color = "grey-100" }: IScatterPlotIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 17.3832C8.65685 17.3832 10 16.04 10 14.3832C10 12.7263 8.65685 11.3832 7 11.3832C5.34315 11.3832 4 12.7263 4 14.3832C4 16.04 5.34315 17.3832 7 17.3832Z" fill={colorCode} />
      <path d="M11 9.38318C12.6569 9.38318 14 8.04003 14 6.38318C14 4.72632 12.6569 3.38318 11 3.38318C9.34315 3.38318 8 4.72632 8 6.38318C8 8.04003 9.34315 9.38318 11 9.38318Z" fill={colorCode} />
      <path d="M16.6 20.9832C18.2568 20.9832 19.6 19.64 19.6 17.9832C19.6 16.3263 18.2568 14.9832 16.6 14.9832C14.9431 14.9832 13.6 16.3263 13.6 17.9832C13.6 19.64 14.9431 20.9832 16.6 20.9832Z" fill={colorCode} />
    </svg>
  )
}
