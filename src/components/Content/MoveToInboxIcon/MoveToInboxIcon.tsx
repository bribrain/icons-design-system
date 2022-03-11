import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IMoveToInboxIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function MoveToInboxIcon({ size = 24, rotate = 0, color = "black" }: IMoveToInboxIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19 3.3833H4.99C3.88 3.3833 3 4.2833 3 5.3833V19.3833C3 20.4833 3.88 21.3833 4.99 21.3833H19C20.1 21.3833 21 20.4833 21 19.3833V5.3833C21 4.2833 20.1 3.3833 19 3.3833ZM19 15.3833H15.87C15.4 15.3833 15.02 15.7233 14.89 16.1833C14.54 17.4533 13.37 18.3833 12 18.3833C10.63 18.3833 9.46 17.4533 9.11 16.1833C8.98 15.7233 8.6 15.3833 8.13 15.3833H4.99V6.3833C4.99 5.8333 5.44 5.3833 5.99 5.3833H18C18.55 5.3833 19 5.8333 19 6.3833V15.3833ZM16 10.3833H14V7.3833H10V10.3833H8L11.65 14.0333C11.85 14.2333 12.16 14.2333 12.36 14.0333L16 10.3833Z"
        fill={colorCode}
      />
    </svg>
  )
}
