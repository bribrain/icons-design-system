import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface ILinkIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function LinkIcon({ size = 24, rotate = 0, color = "grey-100" }: ILinkIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17 7.3833H14C13.45 7.3833 13 7.8333 13 8.3833C13 8.9333 13.45 9.3833 14 9.3833H17C18.65 9.3833 20 10.7333 20 12.3833C20 14.0333 18.65 15.3833 17 15.3833H14C13.45 15.3833 13 15.8333 13 16.3833C13 16.9333 13.45 17.3833 14 17.3833H17C19.76 17.3833 22 15.1433 22 12.3833C22 9.6233 19.76 7.3833 17 7.3833ZM8 12.3833C8 12.9333 8.45 13.3833 9 13.3833H15C15.55 13.3833 16 12.9333 16 12.3833C16 11.8333 15.55 11.3833 15 11.3833H9C8.45 11.3833 8 11.8333 8 12.3833ZM10 15.3833H7C5.35 15.3833 4 14.0333 4 12.3833C4 10.7333 5.35 9.3833 7 9.3833H10C10.55 9.3833 11 8.9333 11 8.3833C11 7.8333 10.55 7.3833 10 7.3833H7C4.24 7.3833 2 9.6233 2 12.3833C2 15.1433 4.24 17.3833 7 17.3833H10C10.55 17.3833 11 16.9333 11 16.3833C11 15.8333 10.55 15.3833 10 15.3833Z"
        fill={colorCode}
      />
    </svg>
  )
}
