import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface INextWeekIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function NextWeekIcon({ size = 24, rotate = 0, color = "grey-100" }: INextWeekIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 7.3833H16V5.3833C16 4.8333 15.78 4.3333 15.41 3.9733C15.05 3.6033 14.55 3.3833 14 3.3833H10C8.9 3.3833 8 4.2833 8 5.3833V7.3833H4C2.9 7.3833 2 8.2833 2 9.3833V20.3833C2 21.4833 2.9 22.3833 4 22.3833H20C21.1 22.3833 22 21.4833 22 20.3833V9.3833C22 8.2833 21.1 7.3833 20 7.3833ZM10 5.3833H14V7.3833H10V5.3833ZM10.5 18.3833C10.22 18.1033 10.22 17.6633 10.5 17.3833L13 14.8833L10.5 12.3833C10.22 12.1033 10.22 11.6633 10.5 11.3833C10.78 11.1033 11.22 11.1033 11.5 11.3833L14.65 14.5333C14.85 14.7333 14.85 15.0433 14.65 15.2433L11.5 18.3833C11.22 18.6633 10.78 18.6633 10.5 18.3833Z"
        fill={colorCode}
      />
    </svg>
  )
}
