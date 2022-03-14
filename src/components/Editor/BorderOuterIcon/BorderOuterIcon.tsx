import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IBorderOuterIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function BorderOuterIcon({ size = 24, rotate = 0, color = "grey-100" }: IBorderOuterIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13 7.38318H11V9.38318H13V7.38318ZM13 11.3832H11V13.3832H13V11.3832ZM17 11.3832H15V13.3832H17V11.3832ZM3 5.38318V19.3832C3 20.4832 3.9 21.3832 5 21.3832H19C20.1 21.3832 21 20.4832 21 19.3832V5.38318C21 4.28318 20.1 3.38318 19 3.38318H5C3.9 3.38318 3 4.28318 3 5.38318ZM18 19.3832H6C5.45 19.3832 5 18.9332 5 18.3832V6.38318C5 5.83318 5.45 5.38318 6 5.38318H18C18.55 5.38318 19 5.83318 19 6.38318V18.3832C19 18.9332 18.55 19.3832 18 19.3832ZM13 15.3832H11V17.3832H13V15.3832ZM9 11.3832H7V13.3832H9V11.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}
