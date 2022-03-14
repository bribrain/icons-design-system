import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IDvrIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function DvrIcon({ size = 24, rotate = 0, color = "grey-100" }: IDvrIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21 3.38318H3C1.9 3.38318 1 4.28318 1 5.38318V17.3832C1 18.4832 1.9 19.3832 3 19.3832H8V20.3832C8 20.9332 8.45 21.3832 9 21.3832H15C15.55 21.3832 16 20.9332 16 20.3832V19.3832H21C22.1 19.3832 23 18.4832 23 17.3832V5.38318C23 4.28318 22.1 3.38318 21 3.38318ZM20 17.3832H4C3.45 17.3832 3 16.9332 3 16.3832V6.38318C3 5.83318 3.45 5.38318 4 5.38318H20C20.55 5.38318 21 5.83318 21 6.38318V16.3832C21 16.9332 20.55 17.3832 20 17.3832ZM18 8.38318H9C8.45 8.38318 8 8.83318 8 9.38318C8 9.93318 8.45 10.3832 9 10.3832H18C18.55 10.3832 19 9.93318 19 9.38318C19 8.83318 18.55 8.38318 18 8.38318ZM18 12.3832H9C8.45 12.3832 8 12.8332 8 13.3832C8 13.9332 8.45 14.3832 9 14.3832H18C18.55 14.3832 19 13.9332 19 13.3832C19 12.8332 18.55 12.3832 18 12.3832ZM7 8.38318H5V10.3832H7V8.38318ZM7 12.3832H5V14.3832H7V12.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}
