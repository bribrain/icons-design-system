import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IDialerSipIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function DialerSipIcon({ size = 24, rotate = 0, color = "grey-100" }: IDialerSipIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.5 8.38318C16.78 8.38318 17 8.16318 17 7.88318V3.88318C17 3.60318 16.78 3.38318 16.5 3.38318C16.22 3.38318 16 3.60318 16 3.88318V7.88318C16 8.16318 16.22 8.38318 16.5 8.38318ZM12.5 7.38318C12.22 7.38318 12 7.60318 12 7.88318C12 8.16318 12.22 8.38318 12.5 8.38318H14.45C14.75 8.38318 15 8.13318 15 7.83318V5.93318C15 5.63318 14.75 5.38318 14.45 5.38318H13V4.38318H14.5C14.78 4.38318 15 4.16318 15 3.88318C15 3.60318 14.78 3.38318 14.5 3.38318H12.55C12.25 3.38318 12 3.63318 12 3.93318V5.82318C12 6.13318 12.25 6.38318 12.55 6.38318H14V7.38318H12.5ZM20.45 3.38318H18.56C18.25 3.38318 18 3.63318 18 3.93318V7.88318C18 8.16318 18.22 8.38318 18.5 8.38318C18.78 8.38318 19 8.16318 19 7.88318V6.38318H20.45C20.75 6.38318 21 6.13318 21 5.83318V3.93318C21 3.63318 20.75 3.38318 20.45 3.38318ZM20 5.38318H19V4.38318H20V5.38318ZM19.21 15.6532L16.67 15.3632C16.06 15.2932 15.46 15.5032 15.03 15.9332L13.19 17.7732C10.36 16.3332 8.04003 14.0232 6.60003 11.1832L8.45003 9.33318C8.88003 8.90318 9.09003 8.29318 9.02003 7.69318L8.73003 5.17318C8.62003 4.16318 7.76003 3.39318 6.75003 3.39318H5.02003C3.89003 3.39318 2.95003 4.33318 3.02003 5.46318C3.55003 14.0032 10.38 20.8232 18.91 21.3532C20.04 21.4232 20.98 20.4832 20.98 19.3532V17.6232C20.99 16.6232 20.22 15.7632 19.21 15.6532Z"
        fill={colorCode}
      />
    </svg>
  )
}