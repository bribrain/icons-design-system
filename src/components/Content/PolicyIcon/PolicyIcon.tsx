import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IPolicyIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function PolicyIcon({ size = 24, rotate = 0, color = "grey-100" }: IPolicyIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21 6.6833C21 5.8933 20.53 5.1733 19.81 4.8533L12.81 1.7433C12.29 1.5133 11.7 1.5133 11.19 1.7433L4.19 4.8533C3.47 5.1733 3 5.8933 3 6.6833V11.3833C3 16.9333 6.84 22.1233 12 23.3833C14.3 22.8233 16.33 21.4833 17.88 19.6733L14.76 16.5533C12.82 17.8433 10.18 17.6233 8.47 15.9133C6.52 13.9633 6.52 10.7933 8.47 8.8433C10.42 6.8933 13.59 6.8933 15.54 8.8433C17.25 10.5533 17.46 13.1933 16.18 15.1333L19.08 18.0333C20.29 16.0733 21 13.7633 21 11.3833V6.6833Z"
        fill={colorCode}
      />
      <path d="M12 15.3833C13.6569 15.3833 15 14.0402 15 12.3833C15 10.7264 13.6569 9.3833 12 9.3833C10.3431 9.3833 9 10.7264 9 12.3833C9 14.0402 10.3431 15.3833 12 15.3833Z" fill={colorCode} />
    </svg>
  )
}
