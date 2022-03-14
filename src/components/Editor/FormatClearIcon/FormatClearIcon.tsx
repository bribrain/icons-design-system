import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IFormatClearIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function FormatClearIcon({ size = 24, rotate = 0, color = "grey-100" }: IFormatClearIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.5 8.38318C19.33 8.38318 20 7.71318 20 6.88318C20 6.05318 19.33 5.38318 18.5 5.38318H6.38998L9.38998 8.38318H11.22L10.67 9.66318L12.76 11.7532L14.21 8.38318H18.5ZM17.44 19.2632L4.11998 5.94318C3.72998 5.55318 3.09998 5.55318 2.70998 5.94318C2.31998 6.33318 2.31998 6.96318 2.70998 7.35318L8.96998 13.6132L7.31998 17.4532C6.92998 18.3732 7.59998 19.3832 8.58998 19.3832C9.13998 19.3832 9.63998 19.0532 9.85998 18.5432L11.07 15.7132L16.02 20.6632C16.41 21.0532 17.04 21.0532 17.43 20.6632C17.83 20.2832 17.83 19.6532 17.44 19.2632Z"
        fill={colorCode}
      />
    </svg>
  )
}
