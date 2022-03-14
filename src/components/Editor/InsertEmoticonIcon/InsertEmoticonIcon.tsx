import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IInsertEmoticonIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function InsertEmoticonIcon({ size = 24, rotate = 0, color = "grey-100" }: IInsertEmoticonIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.99 2.38318C6.47 2.38318 2 6.86318 2 12.3832C2 17.9032 6.47 22.3832 11.99 22.3832C17.52 22.3832 22 17.9032 22 12.3832C22 6.86318 17.52 2.38318 11.99 2.38318ZM12 20.3832C7.58 20.3832 4 16.8032 4 12.3832C4 7.96318 7.58 4.38318 12 4.38318C16.42 4.38318 20 7.96318 20 12.3832C20 16.8032 16.42 20.3832 12 20.3832ZM15.5 11.3832C16.33 11.3832 17 10.7132 17 9.88318C17 9.05318 16.33 8.38318 15.5 8.38318C14.67 8.38318 14 9.05318 14 9.88318C14 10.7132 14.67 11.3832 15.5 11.3832ZM8.5 11.3832C9.33 11.3832 10 10.7132 10 9.88318C10 9.05318 9.33 8.38318 8.5 8.38318C7.67 8.38318 7 9.05318 7 9.88318C7 10.7132 7.67 11.3832 8.5 11.3832ZM12 17.8832C14.03 17.8832 15.8 16.7732 16.75 15.1332C16.94 14.8032 16.7 14.3832 16.31 14.3832H7.69C7.31 14.3832 7.06 14.8032 7.25 15.1332C8.2 16.7732 9.97 17.8832 12 17.8832Z"
        fill={colorCode}
      />
    </svg>
  )
}
