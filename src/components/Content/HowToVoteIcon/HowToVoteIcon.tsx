import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IHowToVoteIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function HowToVoteIcon({ size = 24, rotate = 0, color = "black" }: IHowToVoteIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.34 15.4033C11.73 15.7933 12.36 15.7933 12.75 15.4033L19.11 9.04334C19.5 8.65334 19.5 8.02334 19.11 7.63334L14.16 2.68334C13.78 2.28334 13.15 2.28334 12.76 2.67334L6.39 9.04334C6 9.43334 6 10.0633 6.39 10.4533L11.34 15.4033ZM13.46 4.79334L17 8.33334L12.05 13.2833L8.51 9.74334L13.46 4.79334ZM20.41 15.7933L18.29 13.6733C18.11 13.4933 17.85 13.3833 17.59 13.3833H17.32L15.32 15.3833H17.23L19 17.3833H5L6.78 15.3833H8.83L6.83 13.3833H6.41C6.14 13.3833 5.89 13.4933 5.7 13.6733L3.58 15.7933C3.21 16.1733 3 16.6833 3 17.2133V20.3833C3 21.4833 3.9 22.3833 5 22.3833H19C20.1 22.3833 21 21.4933 21 20.3833V17.2133C21 16.6833 20.79 16.1733 20.41 15.7933Z"
        fill={colorCode}
      />
    </svg>
  )
}
