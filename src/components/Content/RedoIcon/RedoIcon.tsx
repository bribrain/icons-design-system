import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IRedoIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function RedoIcon({ size = 24, rotate = 0, color = "grey-100" }: IRedoIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.4 10.9833C16.55 9.3733 14.15 8.3833 11.5 8.3833C7.33998 8.3833 3.75998 10.8033 2.05998 14.3133C1.73998 14.9833 2.09998 15.7833 2.80998 16.0233C3.39998 16.2233 4.03998 15.9433 4.30998 15.3833C5.60998 12.7233 8.33998 10.8833 11.5 10.8833C13.45 10.8833 15.23 11.6033 16.62 12.7633L14.71 14.6733C14.08 15.3033 14.52 16.3833 15.41 16.3833H21C21.55 16.3833 22 15.9333 22 15.3833V9.7933C22 8.9033 20.92 8.4533 20.29 9.0833L18.4 10.9833Z"
        fill={colorCode}
      />
    </svg>
  )
}
