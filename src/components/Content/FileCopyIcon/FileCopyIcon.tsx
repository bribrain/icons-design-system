import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IFileCopyIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function FileCopyIcon({ size = 24, rotate = 0, color = "grey-100" }: IFileCopyIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15 1.3833H4C2.9 1.3833 2 2.2833 2 3.3833V16.3833C2 16.9333 2.45 17.3833 3 17.3833C3.55 17.3833 4 16.9333 4 16.3833V4.3833C4 3.8333 4.45 3.3833 5 3.3833H15C15.55 3.3833 16 2.9333 16 2.3833C16 1.8333 15.55 1.3833 15 1.3833ZM15.59 5.9733L20.42 10.8033C20.79 11.1733 21 11.6833 21 12.2133V21.3833C21 22.4833 20.1 23.3833 19 23.3833H7.99C6.89 23.3833 6 22.4833 6 21.3833L6.01 7.3833C6.01 6.2833 6.9 5.3833 8 5.3833H14.17C14.7 5.3833 15.21 5.5933 15.59 5.9733ZM15 12.3833H19.5L14 6.8833V11.3833C14 11.9333 14.45 12.3833 15 12.3833Z"
        fill={colorCode}
      />
    </svg>
  )
}
