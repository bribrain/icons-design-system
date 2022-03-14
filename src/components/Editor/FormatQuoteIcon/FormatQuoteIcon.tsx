import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IFormatQuoteIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function FormatQuoteIcon({ size = 24, rotate = 0, color = "grey-100" }: IFormatQuoteIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.17 17.3832C7.68 17.3832 8.15 17.0932 8.37 16.6432L9.79 13.8032C9.93 13.5232 10 13.2232 10 12.9132V8.38318C10 7.83318 9.55 7.38318 9 7.38318H5C4.45 7.38318 4 7.83318 4 8.38318V12.3832C4 12.9332 4.45 13.3832 5 13.3832H7L5.97 15.4432C5.52 16.3332 6.17 17.3832 7.17 17.3832ZM17.17 17.3832C17.68 17.3832 18.15 17.0932 18.37 16.6432L19.79 13.8032C19.93 13.5232 20 13.2232 20 12.9132V8.38318C20 7.83318 19.55 7.38318 19 7.38318H15C14.45 7.38318 14 7.83318 14 8.38318V12.3832C14 12.9332 14.45 13.3832 15 13.3832H17L15.97 15.4432C15.52 16.3332 16.17 17.3832 17.17 17.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}
