import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IForwardIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function ForwardIcon({ size = 24, rotate = 0, color = "black" }: IForwardIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 8.38332V6.79332C12 5.90332 13.08 5.45332 13.71 6.08332L19.3 11.6733C19.69 12.0633 19.69 12.6933 19.3 13.0833L13.71 18.6733C13.08 19.3033 12 18.8633 12 17.9733V16.3833H5C4.45 16.3833 4 15.9333 4 15.3833V9.38332C4 8.83332 4.45 8.38332 5 8.38332H12Z"
        fill={colorCode}
      />
    </svg>
  )
}
