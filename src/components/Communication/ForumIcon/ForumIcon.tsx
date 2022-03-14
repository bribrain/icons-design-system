import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IForumIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function ForumIcon({ size = 24, rotate = 0, color = "grey-100" }: IForumIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 6.38318H19V14.3832C19 14.9332 18.55 15.3832 18 15.3832H6V16.3832C6 17.4832 6.9 18.3832 8 18.3832H18L22 22.3832V8.38318C22 7.28318 21.1 6.38318 20 6.38318ZM17 11.3832V4.38318C17 3.28318 16.1 2.38318 15 2.38318H4C2.9 2.38318 2 3.28318 2 4.38318V17.3832L6 13.3832H15C16.1 13.3832 17 12.4832 17 11.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}
