import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface ISignalWifi4BarLockIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function SignalWifi4BarLockIcon({ size = 24, rotate = 0, color = "grey-100" }: ISignalWifi4BarLockIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.55 9.99318L23.64 7.38318C23.19 7.04318 18.71 3.38318 12 3.38318C5.27999 3.38318 0.809985 7.04318 0.359985 7.38318L10.44 19.9432C11.24 20.9432 12.76 20.9432 13.56 19.9432L15.5 17.5232V14.8832C15.5 12.0832 17.7 9.88318 20.5 9.88318C20.86 9.88318 21.21 9.92318 21.55 9.99318ZM23 16.3832V14.8832C23 13.4832 21.9 12.3832 20.5 12.3832C19.1 12.3832 18 13.4832 18 14.8832V16.3832C17.5 16.3832 17 16.8832 17 17.3832V21.3832C17 21.8832 17.5 22.3832 18 22.3832H23C23.5 22.3832 24 21.8832 24 21.3832V17.3832C24 16.8832 23.5 16.3832 23 16.3832ZM22 16.3832H19V14.8832C19 14.0832 19.7 13.3832 20.5 13.3832C21.3 13.3832 22 14.0832 22 14.8832V16.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}
