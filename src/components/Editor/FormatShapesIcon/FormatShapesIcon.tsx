import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IFormatShapesIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function FormatShapesIcon({ size = 24, rotate = 0, color = "grey-100" }: IFormatShapesIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M23 6.38318V2.38318C23 1.83318 22.55 1.38318 22 1.38318H18C17.45 1.38318 17 1.83318 17 2.38318V3.38318H7V2.38318C7 1.83318 6.55 1.38318 6 1.38318H2C1.45 1.38318 1 1.83318 1 2.38318V6.38318C1 6.93318 1.45 7.38318 2 7.38318H3V17.3832H2C1.45 17.3832 1 17.8332 1 18.3832V22.3832C1 22.9332 1.45 23.3832 2 23.3832H6C6.55 23.3832 7 22.9332 7 22.3832V21.3832H17V22.3832C17 22.9332 17.45 23.3832 18 23.3832H22C22.55 23.3832 23 22.9332 23 22.3832V18.3832C23 17.8332 22.55 17.3832 22 17.3832H21V7.38318H22C22.55 7.38318 23 6.93318 23 6.38318ZM3 3.38318H5V5.38318H3V3.38318ZM5 21.3832H3V19.3832H5V21.3832ZM17 19.3832H7V18.3832C7 17.8332 6.55 17.3832 6 17.3832H5V7.38318H6C6.55 7.38318 7 6.93318 7 6.38318V5.38318H17V6.38318C17 6.93318 17.45 7.38318 18 7.38318H19V17.3832H18C17.45 17.3832 17 17.8332 17 18.3832V19.3832ZM21 21.3832H19V19.3832H21V21.3832ZM19 5.38318V3.38318H21V5.38318H19ZM12.94 8.03318C12.79 7.64318 12.41 7.38318 11.99 7.38318C11.57 7.38318 11.19 7.64318 11.05 8.03318L8.28 15.3632C8.09 15.8532 8.45 16.3832 8.98 16.3832C9.3 16.3832 9.58 16.1832 9.69 15.8832L10.24 14.3832H13.73L14.29 15.8932C14.4 16.1832 14.68 16.3832 15 16.3832H15.01C15.54 16.3832 15.9 15.8532 15.72 15.3632L12.94 8.03318ZM10.69 13.1232L12 9.29318L13.3 13.1232H10.69Z"
        fill={colorCode}
      />
    </svg>
  )
}