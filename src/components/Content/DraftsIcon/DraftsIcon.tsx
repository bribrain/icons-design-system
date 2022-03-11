import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IDraftsIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function DraftsIcon({ size = 24, rotate = 0, color = "grey-100" }: IDraftsIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.99 8.3833C21.99 7.6633 21.62 7.0333 21.05 6.6833L13.01 1.9733C12.39 1.6033 11.61 1.6033 10.99 1.9733L2.95 6.6833C2.38 7.0333 2 7.6633 2 8.3833V18.3833C2 19.4833 2.9 20.3833 4 20.3833H20C21.1 20.3833 22 19.4833 22 18.3833L21.99 8.3833ZM10.94 12.7233L3.74 8.2233L10.99 3.9733C11.61 3.6033 12.39 3.6033 13.01 3.9733L20.26 8.2233L13.06 12.7233C12.41 13.1233 11.59 13.1233 10.94 12.7233Z"
        fill={colorCode}
      />
    </svg>
  )
}
