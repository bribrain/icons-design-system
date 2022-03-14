import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IGpsOffIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function GpsOffIcon({ size = 24, rotate = 0, color = "grey-100" }: IGpsOffIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22 13.3832C22.55 13.3832 23 12.9332 23 12.3832C23 11.8332 22.55 11.3832 22 11.3832H20.94C20.48 7.21318 17.17 3.90318 13 3.44318V2.38318C13 1.83318 12.55 1.38318 12 1.38318C11.45 1.38318 11 1.83318 11 2.38318V3.44318C10.02 3.55318 9.09 3.82318 8.23 4.22318L9.76 5.75318C10.46 5.51318 11.22 5.38318 12 5.38318C15.87 5.38318 19 8.51318 19 12.3832C19 13.1732 18.87 13.9232 18.63 14.6232L20.16 16.1532C20.56 15.2932 20.83 14.3632 20.94 13.3832H22ZM20.44 19.2632L5.12 3.94318C4.73 3.55318 4.1 3.55318 3.71 3.94318C3.32 4.33318 3.32 4.96318 3.71 5.35318L5.04 6.68318C3.97 8.00318 3.26 9.61318 3.06 11.3832H2C1.45 11.3832 1 11.8332 1 12.3832C1 12.9332 1.45 13.3832 2 13.3832H3.06C3.52 17.5532 6.83 20.8632 11 21.3232V22.3832C11 22.9332 11.45 23.3832 12 23.3832C12.55 23.3832 13 22.9332 13 22.3832V21.3232C14.77 21.1232 16.38 20.4132 17.69 19.3432L19.02 20.6732C19.41 21.0632 20.04 21.0632 20.43 20.6732C20.83 20.2832 20.83 19.6532 20.44 19.2632ZM12 19.3832C8.13 19.3832 5 16.2532 5 12.3832C5 10.7732 5.55 9.29318 6.46 8.11318L16.27 17.9232C15.09 18.8332 13.61 19.3832 12 19.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}
