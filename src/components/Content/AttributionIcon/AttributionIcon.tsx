import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IAttributionIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function AttributionIcon({ size = 24, rotate = 0, color = "black" }: IAttributionIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 8.8833C11.09 8.8833 9.25 9.3433 9.25 10.2633V14.3833C9.25 14.6633 9.47 14.8833 9.75 14.8833H10.75V18.1333C10.75 18.8233 11.31 19.3833 12 19.3833C12.69 19.3833 13.25 18.8233 13.25 18.1333V14.8833H14.25C14.53 14.8833 14.75 14.6633 14.75 14.3833V10.2633C14.75 9.3533 12.91 8.8833 12 8.8833ZM12 2.3833C6.47 2.3833 2 6.8533 2 12.3833C2 17.9133 6.47 22.3833 12 22.3833C17.53 22.3833 22 17.9033 22 12.3833C22 6.8633 17.52 2.3833 12 2.3833ZM12 20.3833C7.58 20.3833 4 16.8033 4 12.3833C4 7.9633 7.58 4.3833 12 4.3833C16.42 4.3833 20 7.9633 20 12.3833C20 16.8033 16.42 20.3833 12 20.3833Z"
        fill={colorCode}
      />
      <path d="M12 8.3833C12.8284 8.3833 13.5 7.71173 13.5 6.8833C13.5 6.05487 12.8284 5.3833 12 5.3833C11.1716 5.3833 10.5 6.05487 10.5 6.8833C10.5 7.71173 11.1716 8.3833 12 8.3833Z" fill={colorCode} />
    </svg>
  )
}
