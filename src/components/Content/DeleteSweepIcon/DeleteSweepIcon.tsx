import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IDeleteSweepIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function DeleteSweepIcon({ size = 24, rotate = 0, color = "black" }: IDeleteSweepIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 16.3833H18C18.55 16.3833 19 16.8333 19 17.3833C19 17.9333 18.55 18.3833 18 18.3833H16C15.45 18.3833 15 17.9333 15 17.3833C15 16.8333 15.45 16.3833 16 16.3833ZM16 8.3833H21C21.55 8.3833 22 8.8333 22 9.3833C22 9.9333 21.55 10.3833 21 10.3833H16C15.45 10.3833 15 9.9333 15 9.3833C15 8.8333 15.45 8.3833 16 8.3833ZM16 12.3833H20C20.55 12.3833 21 12.8333 21 13.3833C21 13.9333 20.55 14.3833 20 14.3833H16C15.45 14.3833 15 13.9333 15 13.3833C15 12.8333 15.45 12.3833 16 12.3833ZM3 18.3833C3 19.4833 3.9 20.3833 5 20.3833H11C12.1 20.3833 13 19.4833 13 18.3833V8.3833H3V18.3833ZM13 5.3833H11L10.29 4.6733C10.11 4.4933 9.85 4.3833 9.59 4.3833H6.41C6.15 4.3833 5.89 4.4933 5.71 4.6733L5 5.3833H3C2.45 5.3833 2 5.8333 2 6.3833C2 6.9333 2.45 7.3833 3 7.3833H13C13.55 7.3833 14 6.9333 14 6.3833C14 5.8333 13.55 5.3833 13 5.3833Z"
        fill={colorCode}
      />
    </svg>
  )
}
