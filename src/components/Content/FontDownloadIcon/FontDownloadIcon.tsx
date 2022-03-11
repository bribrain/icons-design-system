import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IFontDownloadIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function FontDownloadIcon({ size = 24, rotate = 0, color = "black" }: IFontDownloadIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.93 13.8833H14.07L12 8.3633L9.93 13.8833ZM20 2.3833H4C2.9 2.3833 2 3.2833 2 4.3833V20.3833C2 21.4833 2.9 22.3833 4 22.3833H20C21.1 22.3833 22 21.4833 22 20.3833V4.3833C22 3.2833 21.1 2.3833 20 2.3833ZM15.71 18.2633L14.81 15.8833H9.17L8.28 18.2533C8.14 18.6333 7.78 18.8833 7.37 18.8833C6.69 18.8833 6.22 18.1933 6.47 17.5633L10.72 6.7533C10.94 6.2233 11.44 5.8833 12 5.8833C12.56 5.8833 13.06 6.2233 13.27 6.7533L17.52 17.5633C17.77 18.1933 17.3 18.8833 16.62 18.8833C16.22 18.8833 15.86 18.6333 15.71 18.2633Z"
        fill={colorCode}
      />
    </svg>
  )
}
