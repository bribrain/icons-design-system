import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IFormatTextdirectionRToLIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function FormatTextdirectionRToLIcon({ size = 24, rotate = 0, color = "grey-100" }: IFormatTextdirectionRToLIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.99996 10.3832V14.3832C9.99996 14.9332 10.45 15.3832 11 15.3832C11.55 15.3832 12 14.9332 12 14.3832V4.38318H14V14.3832C14 14.9332 14.45 15.3832 15 15.3832C15.55 15.3832 16 14.9332 16 14.3832V4.38318H17C17.55 4.38318 18 3.93318 18 3.38318C18 2.83318 17.55 2.38318 17 2.38318H10.17C8.07996 2.38318 6.21996 3.91318 6.01996 5.99318C5.78996 8.37318 7.65996 10.3832 9.99996 10.3832ZM7.99996 17.3832V15.5932C7.99996 15.1432 7.45996 14.9232 7.14996 15.2432L4.35996 18.0332C4.15996 18.2332 4.15996 18.5432 4.35996 18.7432L7.14996 21.5332C7.45996 21.8432 7.99996 21.6232 7.99996 21.1732V19.3832H19C19.55 19.3832 20 18.9332 20 18.3832C20 17.8332 19.55 17.3832 19 17.3832H7.99996Z"
        fill={colorCode}
      />
    </svg>
  )
}
