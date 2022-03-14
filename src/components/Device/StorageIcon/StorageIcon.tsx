import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IStorageIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function StorageIcon({ size = 24, rotate = 0, color = "grey-100" }: IStorageIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 20.3832H20C21.1 20.3832 22 19.4832 22 18.3832C22 17.2832 21.1 16.3832 20 16.3832H4C2.9 16.3832 2 17.2832 2 18.3832C2 19.4832 2.9 20.3832 4 20.3832ZM4 17.3832H6V19.3832H4V17.3832ZM2 6.38318C2 7.48318 2.9 8.38318 4 8.38318H20C21.1 8.38318 22 7.48318 22 6.38318C22 5.28318 21.1 4.38318 20 4.38318H4C2.9 4.38318 2 5.28318 2 6.38318ZM6 7.38318H4V5.38318H6V7.38318ZM4 14.3832H20C21.1 14.3832 22 13.4832 22 12.3832C22 11.2832 21.1 10.3832 20 10.3832H4C2.9 10.3832 2 11.2832 2 12.3832C2 13.4832 2.9 14.3832 4 14.3832ZM4 11.3832H6V13.3832H4V11.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}
