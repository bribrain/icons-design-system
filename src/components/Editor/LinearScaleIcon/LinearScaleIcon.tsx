import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface ILinearScaleIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function LinearScaleIcon({ size = 24, rotate = 0, color = "grey-100" }: ILinearScaleIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.5 9.88318C18.47 9.88318 17.6 10.5032 17.21 11.3832H14.29C13.9 10.5032 13.03 9.88318 12 9.88318C10.97 9.88318 10.1 10.5032 9.71 11.3832H6.79C6.4 10.5032 5.53 9.88318 4.5 9.88318C3.12 9.88318 2 11.0032 2 12.3832C2 13.7632 3.12 14.8832 4.5 14.8832C5.53 14.8832 6.4 14.2632 6.79 13.3832H9.71C10.1 14.2632 10.97 14.8832 12 14.8832C13.03 14.8832 13.9 14.2632 14.29 13.3832H17.21C17.6 14.2632 18.47 14.8832 19.5 14.8832C20.88 14.8832 22 13.7632 22 12.3832C22 11.0032 20.88 9.88318 19.5 9.88318Z"
        fill={colorCode}
      />
    </svg>
  )
}
