import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IRssFeedIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function RssFeedIcon({ size = 24, rotate = 0, color = "grey-100" }: IRssFeedIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.18 20.3832C7.38398 20.3832 8.36 19.4072 8.36 18.2032C8.36 16.9992 7.38398 16.0232 6.18 16.0232C4.97602 16.0232 4 16.9992 4 18.2032C4 19.4072 4.97602 20.3832 6.18 20.3832Z" fill={colorCode} />
      <path
        d="M5.59 10.6132C4.75 10.4732 4 11.1632 4 12.0132C4 12.7232 4.53 13.2932 5.23 13.4132C8.15 13.9232 10.45 16.2332 10.97 19.1532C11.09 19.8532 11.66 20.3832 12.37 20.3832C13.22 20.3832 13.91 19.6332 13.78 18.7932C13.1 14.5932 9.79 11.2832 5.59 10.6132ZM5.56 4.9032C4.73 4.8132 4 5.4832 4 6.3132C4 7.0432 4.55 7.6432 5.27 7.7132C11.28 8.3132 16.06 13.0932 16.66 19.1032C16.73 19.8332 17.33 20.3832 18.06 20.3832C18.9 20.3832 19.56 19.6532 19.48 18.8232C18.75 11.4832 12.91 5.6332 5.56 4.9032Z"
        fill={colorCode}
      />
    </svg>
  )
}
