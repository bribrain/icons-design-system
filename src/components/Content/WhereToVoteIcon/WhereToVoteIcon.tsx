import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IWhereToVoteIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function WhereToVoteIcon({ size = 24, rotate = 0, color = "black" }: IWhereToVoteIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2.3833C8.14 2.3833 5 5.5233 5 9.3833C5 13.5533 9.42 19.3033 11.23 21.4933C11.63 21.9733 12.36 21.9733 12.76 21.4933C14.58 19.3033 19 13.5533 19 9.3833C19 5.5233 15.86 2.3833 12 2.3833ZM16.31 8.5433L11.18 13.6733C10.79 14.0633 10.16 14.0633 9.77 13.6733L7.7 11.6033C7.31 11.2133 7.31 10.5733 7.7 10.1833C8.09 9.7933 8.73 9.7933 9.12 10.1833L10.48 11.5433L14.9 7.1233C15.29 6.7333 15.93 6.7333 16.32 7.1233C16.7 7.5233 16.7 8.1533 16.31 8.5433Z"
        fill={colorCode}
      />
    </svg>
  )
}
