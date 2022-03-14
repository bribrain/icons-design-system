import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IMailOutlineIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function MailOutlineIcon({ size = 24, rotate = 0, color = "grey-100" }: IMailOutlineIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 4.38318H4C2.9 4.38318 2.01 5.28318 2.01 6.38318L2 18.3832C2 19.4832 2.9 20.3832 4 20.3832H20C21.1 20.3832 22 19.4832 22 18.3832V6.38318C22 5.28318 21.1 4.38318 20 4.38318ZM19 18.3832H5C4.45 18.3832 4 17.9332 4 17.3832V8.38318L10.94 12.7232C11.59 13.1332 12.41 13.1332 13.06 12.7232L20 8.38318V17.3832C20 17.9332 19.55 18.3832 19 18.3832ZM12 11.3832L4 6.38318H20L12 11.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}
