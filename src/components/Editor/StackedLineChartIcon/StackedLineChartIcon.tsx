import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IStackedLineChartIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function StackedLineChartIcon({ size = 24, rotate = 0, color = "grey-100" }: IStackedLineChartIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.78997 15.1632L2.69997 15.0732C2.30997 14.6832 2.30997 14.0532 2.69997 13.6632L8.78997 7.56318C9.17997 7.17318 9.80997 7.17318 10.2 7.56318L13.49 10.8532L19.88 3.67318C20.26 3.24318 20.93 3.23318 21.33 3.63318C21.7 4.01318 21.72 4.61318 21.37 5.00318L14.2 13.0732C13.82 13.5032 13.16 13.5232 12.75 13.1132L9.49997 9.86318L4.19997 15.1632C3.81997 15.5532 3.17997 15.5532 2.78997 15.1632ZM4.19997 21.1632L9.49997 15.8632L12.75 19.1132C13.16 19.5232 13.82 19.5032 14.2 19.0732L21.37 11.0032C21.72 10.6132 21.7 10.0132 21.33 9.63318C20.93 9.23318 20.26 9.24318 19.88 9.67318L13.49 16.8532L10.2 13.5632C9.80997 13.1732 9.17997 13.1732 8.78997 13.5632L2.69997 19.6632C2.30997 20.0532 2.30997 20.6832 2.69997 21.0732L2.78997 21.1632C3.17997 21.5532 3.81997 21.5532 4.19997 21.1632Z"
        fill={colorCode}
      />
    </svg>
  )
}
