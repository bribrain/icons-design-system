import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IWrapTextIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function WrapTextIcon({ size = 24, rotate = 0, color = "grey-100" }: IWrapTextIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 7.38318H19C19.55 7.38318 20 6.93318 20 6.38318C20 5.83318 19.55 5.38318 19 5.38318H5C4.45 5.38318 4 5.83318 4 6.38318C4 6.93318 4.45 7.38318 5 7.38318ZM16.83 11.3832H5C4.45 11.3832 4 11.8332 4 12.3832C4 12.9332 4.45 13.3832 5 13.3832H17.13C18.13 13.3832 19.06 14.0532 19.22 15.0432C19.43 16.2932 18.46 17.3832 17.25 17.3832H15V16.5932C15 16.1432 14.46 15.9232 14.15 16.2432L12.36 18.0332C12.16 18.2332 12.16 18.5432 12.36 18.7432L14.15 20.5332C14.47 20.8532 15 20.6232 15 20.1832V19.3832H17C19.34 19.3832 21.21 17.3732 20.98 14.9932C20.78 12.9132 18.92 11.3832 16.83 11.3832ZM9 17.3832H5C4.45 17.3832 4 17.8332 4 18.3832C4 18.9332 4.45 19.3832 5 19.3832H9C9.55 19.3832 10 18.9332 10 18.3832C10 17.8332 9.55 17.3832 9 17.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}
