import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IPieChartIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function PieChartIcon({ size = 24, rotate = 0, color = "grey-100" }: IPieChartIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11 3.56319V21.2032C11 21.8432 10.41 22.3232 9.79 22.1832C5.32 21.1832 2 17.1732 2 12.3832C2 7.59319 5.32 3.58319 9.79 2.58319C10.41 2.44319 11 2.92319 11 3.56319ZM13.03 3.56319V10.3732C13.03 10.9232 13.48 11.3732 14.03 11.3732H20.82C21.46 11.3732 21.94 10.7832 21.8 10.1532C20.95 6.39319 18 3.43319 14.25 2.58319C13.62 2.44319 13.03 2.92319 13.03 3.56319ZM13.03 14.3932V21.2032C13.03 21.8432 13.62 22.3232 14.25 22.1832C18.01 21.3332 20.96 18.3632 21.81 14.6032C21.95 13.9832 21.46 13.3832 20.83 13.3832H14.04C13.48 13.3932 13.03 13.8432 13.03 14.3932Z"
        fill={colorCode}
      />
    </svg>
  )
}
