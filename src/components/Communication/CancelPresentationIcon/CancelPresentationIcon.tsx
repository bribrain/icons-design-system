import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface ICancelPresentationIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function CancelPresentationIcon({ size = 24, rotate = 0, color = "grey-100" }: ICancelPresentationIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21 3.38318H3C1.9 3.38318 1 4.28318 1 5.38318V19.3832C1 20.4832 1.9 21.3832 3 21.3832H21C22.1 21.3832 23 20.4832 23 19.3832V5.38318C23 4.28318 22.1 3.38318 21 3.38318ZM21 18.3832C21 18.9332 20.55 19.3832 20 19.3832H4C3.45 19.3832 3 18.9332 3 18.3832V6.38318C3 5.83318 3.45 5.38318 4 5.38318H20C20.55 5.38318 21 5.83318 21 6.38318V18.3832ZM15.29 9.08318C14.9 8.69318 14.27 8.69318 13.88 9.08318L12 10.9732L10.11 9.08318C9.72 8.69318 9.09 8.69318 8.7 9.08318C8.31 9.47318 8.31 10.1032 8.7 10.4932L10.59 12.3832L8.7 14.2732C8.31 14.6632 8.31 15.2932 8.7 15.6832C9.09 16.0732 9.72 16.0732 10.11 15.6832L12 13.7932L13.89 15.6832C14.28 16.0732 14.91 16.0732 15.3 15.6832C15.69 15.2932 15.69 14.6632 15.3 14.2732L13.41 12.3832L15.3 10.4932C15.68 10.1132 15.68 9.47318 15.29 9.08318Z"
        fill={colorCode}
      />
    </svg>
  )
}
