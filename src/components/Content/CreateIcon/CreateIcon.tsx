import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface ICreateIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function CreateIcon({ size = 24, rotate = 0, color = "grey-100" }: ICreateIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 17.8434V20.8834C3 21.1634 3.22 21.3834 3.5 21.3834H6.54C6.67 21.3834 6.8 21.3334 6.89 21.2334L17.81 10.3234L14.06 6.57336L3.15 17.4834C3.05 17.5834 3 17.7034 3 17.8434ZM20.71 7.42336C21.1 7.03336 21.1 6.40336 20.71 6.01336L18.37 3.67336C17.98 3.28336 17.35 3.28336 16.96 3.67336L15.13 5.50336L18.88 9.25336L20.71 7.42336Z"
        fill={colorCode}
      />
    </svg>
  )
}
