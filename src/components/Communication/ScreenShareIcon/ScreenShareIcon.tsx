import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IScreenShareIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function ScreenShareIcon({ size = 24, rotate = 0, color = "grey-100" }: IScreenShareIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 18.3832C21.1 18.3832 22 17.4832 22 16.3832V6.38318C22 5.28318 21.1 4.38318 20 4.38318H4C2.9 4.38318 2 5.28318 2 6.38318V16.3832C2 17.4832 2.89 18.3832 4 18.3832H1C0.45 18.3832 0 18.8332 0 19.3832C0 19.9332 0.45 20.3832 1 20.3832H23C23.55 20.3832 24 19.9332 24 19.3832C24 18.8332 23.55 18.3832 23 18.3832H20ZM13 14.8532V12.6632C10.22 12.6632 8.39 13.5132 7 15.3832C7.56 12.7132 9.11 10.0532 13 9.51318V7.38318L16.61 10.7432C16.82 10.9432 16.82 11.2732 16.61 11.4732L13 14.8532Z"
        fill={colorCode}
      />
    </svg>
  )
}
