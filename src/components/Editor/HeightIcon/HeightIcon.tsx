import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IHeightIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function HeightIcon({ size = 24, rotate = 0, color = "grey-100" }: IHeightIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13 7.37318H14.79C15.24 7.37318 15.46 6.83318 15.14 6.52318L12.35 3.74318C12.15 3.55318 11.84 3.55318 11.64 3.74318L8.86003 6.52318C8.54003 6.83318 8.76003 7.37318 9.21003 7.37318H11V17.3932H9.21003C8.76003 17.3932 8.54003 17.9332 8.86003 18.2432L11.65 21.0232C11.85 21.2132 12.16 21.2132 12.36 21.0232L15.15 18.2432C15.47 17.9332 15.24 17.3932 14.8 17.3932H13V7.37318Z"
        fill={colorCode}
      />
    </svg>
  )
}
