import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface ISignalWifi4BarIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function SignalWifi4BarIcon({ size = 24, rotate = 0, color = "grey-100" }: ISignalWifi4BarIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.64 7.38318C23.19 7.04318 18.71 3.38318 12 3.38318C5.27999 3.38318 0.809985 7.04318 0.359985 7.38318L10.44 19.9432C11.24 20.9432 12.76 20.9432 13.56 19.9432L23.64 7.38318Z" fill={colorCode} />
    </svg>
  )
}
