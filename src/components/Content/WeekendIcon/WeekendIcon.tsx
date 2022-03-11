import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IWeekendIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function WeekendIcon({ size = 24, rotate = 0, color = "black" }: IWeekendIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21 10.3833C19.9 10.3833 19 11.2833 19 12.3833V15.3833H5V12.3833C5 11.2833 4.1 10.3833 3 10.3833C1.9 10.3833 1 11.2833 1 12.3833V17.3833C1 18.4833 1.9 19.3833 3 19.3833H21C22.1 19.3833 23 18.4833 23 17.3833V12.3833C23 11.2833 22.1 10.3833 21 10.3833ZM18 5.3833H6C4.9 5.3833 4 6.2833 4 7.3833V9.5333C5.16 9.9433 6 11.0433 6 12.3533V14.3833H18V12.3533C18 11.0533 18.84 9.9533 20 9.5333V7.3833C20 6.2833 19.1 5.3833 18 5.3833Z"
        fill={colorCode}
      />
    </svg>
  )
}
