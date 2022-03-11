import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface ISquareFootIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function SquareFootIcon({ size = 24, rotate = 0, color = "grey-100" }: ISquareFootIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.66 18.0432L16.95 18.7532C16.75 18.9532 16.44 18.9532 16.24 18.7532C16.04 18.5532 16.04 18.2432 16.24 18.0432L16.95 17.3332L15.01 15.3932L14.3 16.1032C14.1 16.3032 13.79 16.3032 13.59 16.1032C13.39 15.9032 13.39 15.5932 13.59 15.3932L14.3 14.6832L12.36 12.7432L11.65 13.4532C11.45 13.6532 11.14 13.6532 10.94 13.4532C10.74 13.2532 10.74 12.9432 10.94 12.7432L11.65 12.0332L9.7 10.0832L8.99 10.7932C8.79 10.9932 8.48 10.9932 8.28 10.7932C8.08 10.5932 8.08 10.2832 8.28 10.0832L8.99 9.37324L7.05 7.43324L6.34 8.14324C6.14 8.34324 5.83 8.34324 5.63 8.14324C5.43 7.94324 5.43 7.63324 5.63 7.43324L6.34 6.72324L4.85 5.23324C4.54 4.92324 4 5.14324 4 5.59324V18.3832C4 19.4832 4.9 20.3832 6 20.3832H18.79C19.24 20.3832 19.46 19.8432 19.14 19.5332L17.66 18.0432ZM7 16.3832V11.6232L12.76 17.3832H8C7.45 17.3832 7 16.9332 7 16.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}
