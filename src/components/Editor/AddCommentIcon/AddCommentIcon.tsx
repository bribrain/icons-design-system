import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IAddCommentIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function AddCommentIcon({ size = 24, rotate = 0, color = "grey-100" }: IAddCommentIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22 4.38318C22 3.28318 21.1 2.38318 20 2.38318H4C2.9 2.38318 2 3.28318 2 4.38318V16.3832C2 17.4832 2.9 18.3832 4 18.3832H18L22 22.3832V4.38318ZM16 11.3832H13V14.3832C13 14.9332 12.55 15.3832 12 15.3832C11.45 15.3832 11 14.9332 11 14.3832V11.3832H8C7.45 11.3832 7 10.9332 7 10.3832C7 9.83318 7.45 9.38318 8 9.38318H11V6.38318C11 5.83318 11.45 5.38318 12 5.38318C12.55 5.38318 13 5.83318 13 6.38318V9.38318H16C16.55 9.38318 17 9.83318 17 10.3832C17 10.9332 16.55 11.3832 16 11.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}
