import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IStayCurrentLandscapeIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function StayCurrentLandscapeIcon({ size = 24, rotate = 0, color = "grey-100" }: IStayCurrentLandscapeIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.01 7.38318L1 17.3832C1 18.4832 1.9 19.3832 3 19.3832H21C22.1 19.3832 23 18.4832 23 17.3832V7.38318C23 6.28318 22.1 5.38318 21 5.38318H3C1.9 5.38318 1.01 6.28318 1.01 7.38318ZM19 7.38318V17.3832H5V7.38318H19Z"
        fill={colorCode}
      />
    </svg>
  )
}
