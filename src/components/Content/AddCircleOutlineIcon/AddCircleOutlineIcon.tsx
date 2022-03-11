import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IAddCircleOutlineIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function AddCircleOutlineIcon({ size = 24, rotate = 0, color = "black" }: IAddCircleOutlineIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 7.3833C11.45 7.3833 11 7.8333 11 8.3833V11.3833H8C7.45 11.3833 7 11.8333 7 12.3833C7 12.9333 7.45 13.3833 8 13.3833H11V16.3833C11 16.9333 11.45 17.3833 12 17.3833C12.55 17.3833 13 16.9333 13 16.3833V13.3833H16C16.55 13.3833 17 12.9333 17 12.3833C17 11.8333 16.55 11.3833 16 11.3833H13V8.3833C13 7.8333 12.55 7.3833 12 7.3833ZM12 2.3833C6.48 2.3833 2 6.8633 2 12.3833C2 17.9033 6.48 22.3833 12 22.3833C17.52 22.3833 22 17.9033 22 12.3833C22 6.8633 17.52 2.3833 12 2.3833ZM12 20.3833C7.59 20.3833 4 16.7933 4 12.3833C4 7.9733 7.59 4.3833 12 4.3833C16.41 4.3833 20 7.9733 20 12.3833C20 16.7933 16.41 20.3833 12 20.3833Z"
        fill={colorCode}
      />
    </svg>
  )
}
