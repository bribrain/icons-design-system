import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IFunctionsIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function FunctionsIcon({ size = 24, rotate = 0, color = "grey-100" }: IFunctionsIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.5 4.38318H7.56C6.7 4.38318 6 5.08318 6 5.94318C6 6.22318 6.12 6.49318 6.32 6.68318L12.5 12.3832L6.32 18.0832C6.12 18.2732 6 18.5432 6 18.8232C6 19.6832 6.7 20.3832 7.56 20.3832H16.5C17.33 20.3832 18 19.7132 18 18.8832C18 18.0532 17.33 17.3832 16.5 17.3832H11L14.59 13.7932C15.37 13.0132 15.37 11.7432 14.59 10.9632L11 7.38318H16.5C17.33 7.38318 18 6.71318 18 5.88318C18 5.05318 17.33 4.38318 16.5 4.38318Z"
        fill={colorCode}
      />
    </svg>
  )
}
