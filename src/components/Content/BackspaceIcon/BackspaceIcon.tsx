import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IBackspaceIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function BackspaceIcon({ size = 24, rotate = 0, color = "black" }: IBackspaceIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_73_3327)">
        <path
          d="M22 3.3833H6.99996C6.30996 3.3833 5.76996 3.7333 5.40996 4.2633L0.369956 11.8333C0.149956 12.1733 0.149956 12.6033 0.369956 12.9433L5.40996 20.5033C5.76996 21.0233 6.30996 21.3833 6.99996 21.3833H22C23.1 21.3833 24 20.4833 24 19.3833V5.3833C24 4.2833 23.1 3.3833 22 3.3833ZM18.3 16.6833C17.91 17.0733 17.28 17.0733 16.89 16.6833L14 13.7933L11.11 16.6833C10.72 17.0733 10.09 17.0733 9.69996 16.6833C9.30996 16.2933 9.30996 15.6633 9.69996 15.2733L12.59 12.3833L9.69996 9.4933C9.30996 9.1033 9.30996 8.4733 9.69996 8.0833C10.09 7.6933 10.72 7.6933 11.11 8.0833L14 10.9733L16.89 8.0833C17.28 7.6933 17.91 7.6933 18.3 8.0833C18.69 8.4733 18.69 9.1033 18.3 9.4933L15.41 12.3833L18.3 15.2733C18.68 15.6533 18.68 16.2933 18.3 16.6833Z"
          fill={colorCode}
        />
      </g>
      <defs>
        <clipPath id="clip0_73_3327">
          <rect width="24" height="24" fill="white" transform="translate(0 0.383301)" />
        </clipPath>
      </defs>
    </svg>
  )
}
