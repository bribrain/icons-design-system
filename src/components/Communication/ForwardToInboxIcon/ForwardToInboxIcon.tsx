import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IForwardToInboxIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function ForwardToInboxIcon({ size = 24, rotate = 0, color = "grey-100" }: IForwardToInboxIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 4.38318H4C2.9 4.38318 2 5.28318 2 6.38318V18.3832C2 19.4832 2.9 20.3832 4 20.3832H13V18.3832H4V8.38318L10.94 12.7232C11.59 13.1332 12.41 13.1332 13.06 12.7232L20 8.38318V13.3832H22V6.38318C22 5.28318 21.1 4.38318 20 4.38318ZM12 11.3832L4 6.38318H20L12 11.3832ZM19 16.5932C19 16.1432 19.54 15.9232 19.85 16.2432L22.64 19.0332C22.84 19.2332 22.84 19.5432 22.64 19.7432L19.85 22.5332C19.54 22.8432 19 22.6232 19 22.1732V20.3832H16C15.45 20.3832 15 19.9332 15 19.3832C15 18.8332 15.45 18.3832 16 18.3832H19V16.5932Z"
        fill={colorCode}
      />
    </svg>
  )
}
