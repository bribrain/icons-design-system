import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IHowToRegIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function HowToRegIcon({ size = 24, rotate = 0, color = "grey-100" }: IHowToRegIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 20.3833L11.14 19.5233C9.96 18.3433 9.97 16.4233 11.16 15.2633L12 14.4433C11.61 14.4033 11.32 14.3833 11 14.3833C8.33 14.3833 3 15.7233 3 18.3833V20.3833H12ZM11 12.3833C13.21 12.3833 15 10.5933 15 8.3833C15 6.1733 13.21 4.3833 11 4.3833C8.79 4.3833 7 6.1733 7 8.3833C7 10.5933 8.79 12.3833 11 12.3833Z"
        fill={colorCode}
      />
      <path
        d="M16.18 20.1633C15.79 20.5533 15.15 20.5533 14.76 20.1633L12.69 18.0733C12.31 17.6833 12.31 17.0633 12.69 16.6833L12.7 16.6733C13.09 16.2833 13.72 16.2833 14.1 16.6733L15.47 18.0433L19.9 13.5833C20.29 13.1933 20.92 13.1933 21.31 13.5833L21.32 13.5933C21.7 13.9833 21.7 14.6033 21.32 14.9833L16.18 20.1633Z"
        fill={colorCode}
      />
    </svg>
  )
}
