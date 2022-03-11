import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IFilterListIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function FilterListIcon({ size = 24, rotate = 0, color = "grey-100" }: IFilterListIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11 18.3833H13C13.55 18.3833 14 17.9333 14 17.3833C14 16.8333 13.55 16.3833 13 16.3833H11C10.45 16.3833 10 16.8333 10 17.3833C10 17.9333 10.45 18.3833 11 18.3833ZM3 7.3833C3 7.9333 3.45 8.3833 4 8.3833H20C20.55 8.3833 21 7.9333 21 7.3833C21 6.8333 20.55 6.3833 20 6.3833H4C3.45 6.3833 3 6.8333 3 7.3833ZM7 13.3833H17C17.55 13.3833 18 12.9333 18 12.3833C18 11.8333 17.55 11.3833 17 11.3833H7C6.45 11.3833 6 11.8333 6 12.3833C6 12.9333 6.45 13.3833 7 13.3833Z"
        fill={colorCode}
      />
    </svg>
  )
}
