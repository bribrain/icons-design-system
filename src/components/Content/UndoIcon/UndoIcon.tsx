import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IUndoIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function UndoIcon({ size = 24, rotate = 0, color = "grey-100" }: IUndoIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.5 8.3833C9.85 8.3833 7.45 9.3733 5.6 10.9833L3.71 9.0933C3.08 8.4633 2 8.9033 2 9.7933V15.3833C2 15.9333 2.45 16.3833 3 16.3833H8.59C9.48 16.3833 9.93 15.3033 9.3 14.6733L7.39 12.7633C8.78 11.6033 10.55 10.8833 12.51 10.8833C15.67 10.8833 18.4 12.7233 19.7 15.3833C19.97 15.9433 20.61 16.2233 21.2 16.0233C21.91 15.7933 22.27 14.9833 21.95 14.3033C20.23 10.8033 16.65 8.3833 12.5 8.3833Z"
        fill={colorCode}
      />
    </svg>
  )
}
