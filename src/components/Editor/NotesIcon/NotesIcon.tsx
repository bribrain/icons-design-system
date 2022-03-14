import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface INotesIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function NotesIcon({ size = 24, rotate = 0, color = "grey-100" }: INotesIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 11.3832H4C3.45 11.3832 3 11.8332 3 12.3832C3 12.9332 3.45 13.3832 4 13.3832H20C20.55 13.3832 21 12.9332 21 12.3832C21 11.8332 20.55 11.3832 20 11.3832ZM4 18.3832H14C14.55 18.3832 15 17.9332 15 17.3832C15 16.8332 14.55 16.3832 14 16.3832H4C3.45 16.3832 3 16.8332 3 17.3832C3 17.9332 3.45 18.3832 4 18.3832ZM20 6.38318H4C3.45 6.38318 3 6.83318 3 7.38318V7.39318C3 7.94318 3.45 8.39318 4 8.39318H20C20.55 8.39318 21 7.94318 21 7.39318V7.38318C21 6.83318 20.55 6.38318 20 6.38318Z"
        fill={colorCode}
      />
    </svg>
  )
}
