import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface ISelectAllIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function SelectAllIcon({ size = 24, rotate = 0, color = "grey-100" }: ISelectAllIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 5.3833H5V3.3833C3.9 3.3833 3 4.2833 3 5.3833ZM3 13.3833H5V11.3833H3V13.3833ZM7 21.3833H9V19.3833H7V21.3833ZM3 9.3833H5V7.3833H3V9.3833ZM13 3.3833H11V5.3833H13V3.3833ZM19 3.3833V5.3833H21C21 4.2833 20.1 3.3833 19 3.3833ZM5 21.3833V19.3833H3C3 20.4833 3.9 21.3833 5 21.3833ZM3 17.3833H5V15.3833H3V17.3833ZM9 3.3833H7V5.3833H9V3.3833ZM11 21.3833H13V19.3833H11V21.3833ZM19 13.3833H21V11.3833H19V13.3833ZM19 21.3833C20.1 21.3833 21 20.4833 21 19.3833H19V21.3833ZM19 9.3833H21V7.3833H19V9.3833ZM19 17.3833H21V15.3833H19V17.3833ZM15 21.3833H17V19.3833H15V21.3833ZM15 5.3833H17V3.3833H15V5.3833ZM8 17.3833H16C16.55 17.3833 17 16.9333 17 16.3833V8.3833C17 7.8333 16.55 7.3833 16 7.3833H8C7.45 7.3833 7 7.8333 7 8.3833V16.3833C7 16.9333 7.45 17.3833 8 17.3833ZM9 9.3833H15V15.3833H9V9.3833Z"
        fill={colorCode}
      />
    </svg>
  )
}
