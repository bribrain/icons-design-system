import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IReplyAllIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function ReplyAllIcon({ size = 24, rotate = 0, color = "grey-100" }: IReplyAllIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_73_3476)">
        <path
          d="M6.99998 7.94332C6.99998 7.00332 5.85998 6.52332 5.18998 7.19332L0.70998 11.6733C0.31998 12.0633 0.31998 12.6933 0.70998 13.0833L5.18998 17.5633C5.85998 18.2433 6.99998 17.7633 6.99998 16.8233C6.99998 16.5433 6.88998 16.2733 6.68998 16.0733L2.99998 12.3833L6.68998 8.69332C6.88998 8.49332 6.99998 8.22332 6.99998 7.94332ZM13 9.38332V7.79332C13 6.90332 11.92 6.45332 11.29 7.08332L6.69998 11.6733C6.30998 12.0633 6.30998 12.6933 6.69998 13.0833L11.29 17.6733C11.92 18.3033 13 17.8533 13 16.9633V15.2833C18 15.2833 21.5 16.8833 24 20.3833C23 15.3833 20 10.3833 13 9.38332Z"
          fill={colorCode}
        />
      </g>
      <defs>
        <clipPath id="clip0_73_3476">
          <rect width={size} height={size} fill="white" transform="translate(0 0.383301)" />
        </clipPath>
      </defs>
    </svg>
  )
}
