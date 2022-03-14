import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IPublishIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function PublishIcon({ size = 24, rotate = 0, color = "grey-100" }: IPublishIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 5.38318C5 5.93318 5.45 6.38318 6 6.38318H18C18.55 6.38318 19 5.93318 19 5.38318C19 4.83318 18.55 4.38318 18 4.38318H6C5.45 4.38318 5 4.83318 5 5.38318ZM7.41 14.3832H9V19.3832C9 19.9332 9.45 20.3832 10 20.3832H14C14.55 20.3832 15 19.9332 15 19.3832V14.3832H16.59C17.48 14.3832 17.93 13.3032 17.3 12.6732L12.71 8.08318C12.32 7.69318 11.69 7.69318 11.3 8.08318L6.71 12.6732C6.08 13.3032 6.52 14.3832 7.41 14.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}
