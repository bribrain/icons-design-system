import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IInboxIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function InboxIcon({ size = 24, rotate = 0, color = "black" }: IInboxIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19 3.3833H4.99C3.88 3.3833 3.01 4.2733 3.01 5.3833L3 19.3833C3 20.4833 3.88 21.3833 4.99 21.3833H19C20.1 21.3833 21 20.4833 21 19.3833V5.3833C21 4.2733 20.1 3.3833 19 3.3833ZM19 15.3833H15.87C15.4 15.3833 15.02 15.7233 14.89 16.1833C14.54 17.4533 13.37 18.3833 12 18.3833C10.63 18.3833 9.46 17.4533 9.11 16.1833C8.98 15.7233 8.6 15.3833 8.13 15.3833H5V6.3833C5 5.8333 5.45 5.3833 6 5.3833H18C18.55 5.3833 19 5.8333 19 6.3833V15.3833Z"
        fill={colorCode}
      />
    </svg>
  )
}
