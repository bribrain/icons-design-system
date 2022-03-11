import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IBiotechIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function BiotechIcon({ size = 24, rotate = 0, color = "black" }: IBiotechIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7 19.3833C5.9 19.3833 5 20.2833 5 21.3833H19C19 20.2833 18.1 19.3833 17 19.3833H13V17.3833H16C17.1 17.3833 18 16.4833 18 15.3833H10C8.34 15.3833 7 14.0433 7 12.3833C7 11.2933 7.59 10.3433 8.46 9.82331C8.17 9.41331 8 8.92331 8 8.38331C8 8.17331 8.04 7.96331 8.09 7.76331C6.28 8.51331 5 10.3033 5 12.3833C5 15.1433 7.24 17.3833 10 17.3833V19.3833H7Z"
        fill={colorCode}
      />
      <path
        d="M10.56 5.89333C11.91 5.92333 13 7.02333 13 8.38333C13 9.13333 12.67 9.79333 12.15 10.2533L12.4 10.9333C12.59 11.4533 13.16 11.7233 13.68 11.5333C13.87 12.0533 14.44 12.3233 14.96 12.1333C15.48 11.9433 15.75 11.3733 15.56 10.8533C16.08 10.6633 16.35 10.0933 16.16 9.57333L14.1 3.92333C13.91 3.40333 13.34 3.13333 12.82 3.32333C12.63 2.80333 12.06 2.53333 11.54 2.72333C11.02 2.91333 10.75 3.48333 10.94 4.00333C10.42 4.19333 10.15 4.76333 10.34 5.28333L10.56 5.89333Z"
        fill={colorCode}
      />
      <path d="M10.5 9.8833C11.3284 9.8833 12 9.21173 12 8.3833C12 7.55487 11.3284 6.8833 10.5 6.8833C9.67157 6.8833 9 7.55487 9 8.3833C9 9.21173 9.67157 9.8833 10.5 9.8833Z" fill={colorCode} />
    </svg>
  )
}
