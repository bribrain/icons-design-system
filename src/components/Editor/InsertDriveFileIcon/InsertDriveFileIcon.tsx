import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IInsertDriveFileIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function InsertDriveFileIcon({ size = 24, rotate = 0, color = "grey-100" }: IInsertDriveFileIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 2.38318C4.9 2.38318 4.01 3.28318 4.01 4.38318L4 20.3832C4 21.4832 4.89 22.3832 5.99 22.3832H18C19.1 22.3832 20 21.4832 20 20.3832V9.21318C20 8.68318 19.79 8.17318 19.41 7.80318L14.58 2.97318C14.21 2.59318 13.7 2.38318 13.17 2.38318H6ZM13 8.38318V3.88318L18.5 9.38318H14C13.45 9.38318 13 8.93318 13 8.38318Z"
        fill={colorCode}
      />
    </svg>
  )
}
