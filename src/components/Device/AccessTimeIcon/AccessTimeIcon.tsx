import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IAccessTimeIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function AccessTimeIcon({ size = 24, rotate = 0, color = "grey-100" }: IAccessTimeIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.99 2.38318C6.47 2.38318 2 6.86318 2 12.3832C2 17.9032 6.47 22.3832 11.99 22.3832C17.52 22.3832 22 17.9032 22 12.3832C22 6.86318 17.52 2.38318 11.99 2.38318ZM12 20.3832C7.58 20.3832 4 16.8032 4 12.3832C4 7.96318 7.58 4.38318 12 4.38318C16.42 4.38318 20 7.96318 20 12.3832C20 16.8032 16.42 20.3832 12 20.3832ZM11.78 7.38318H11.72C11.32 7.38318 11 7.70318 11 8.10318V12.8232C11 13.1732 11.18 13.5032 11.49 13.6832L15.64 16.1732C15.98 16.3732 16.42 16.2732 16.62 15.9332C16.83 15.5932 16.72 15.1432 16.37 14.9432L12.5 12.6432V8.10318C12.5 7.70318 12.18 7.38318 11.78 7.38318Z"
        fill={colorCode}
      />
    </svg>
  )
}
