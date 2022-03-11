import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IInsightsIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function InsightsIcon({ size = 24, rotate = 0, color = "black" }: IInsightsIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21 8.3833C19.55 8.3833 18.74 9.8233 19.07 10.8933L15.52 14.4533C15.22 14.3633 14.78 14.3633 14.48 14.4533L11.93 11.9033C12.27 10.8333 11.46 9.3833 10 9.3833C8.55 9.3833 7.73 10.8233 8.07 11.9033L3.51 16.4533C2.44 16.1233 1 16.9333 1 18.3833C1 19.4833 1.9 20.3833 3 20.3833C4.45 20.3833 5.26 18.9433 4.93 17.8733L9.48 13.3133C9.78 13.4033 10.22 13.4033 10.52 13.3133L13.07 15.8633C12.73 16.9333 13.54 18.3833 15 18.3833C16.45 18.3833 17.27 16.9433 16.93 15.8633L20.49 12.3133C21.56 12.6433 23 11.8333 23 10.3833C23 9.2833 22.1 8.3833 21 8.3833Z"
        fill={colorCode}
      />
      <path d="M15 9.3833L15.94 7.3133L18 6.3833L15.94 5.4533L15 3.3833L14.08 5.4533L12 6.3833L14.08 7.3133L15 9.3833Z" fill={colorCode} />
      <path d="M3.5 11.3833L4 9.3833L6 8.8833L4 8.3833L3.5 6.3833L3 8.3833L1 8.8833L3 9.3833L3.5 11.3833Z" fill={colorCode} />
    </svg>
  )
}
