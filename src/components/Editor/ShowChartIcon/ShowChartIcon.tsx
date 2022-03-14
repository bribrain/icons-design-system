import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IShowChartIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function ShowChartIcon({ size = 24, rotate = 0, color = "grey-100" }: IShowChartIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.19997 18.1632L9.49997 12.8632L12.75 16.1132C13.16 16.5232 13.82 16.5032 14.2 16.0732L21.37 8.00318C21.72 7.61318 21.7 7.01318 21.33 6.63318C20.93 6.23318 20.26 6.24318 19.88 6.67318L13.49 13.8532L10.2 10.5632C9.80997 10.1732 9.17997 10.1732 8.78997 10.5632L2.69997 16.6632C2.30997 17.0532 2.30997 17.6832 2.69997 18.0732L2.78997 18.1632C3.17997 18.5532 3.81997 18.5532 4.19997 18.1632Z"
        fill={colorCode}
      />
    </svg>
  )
}
