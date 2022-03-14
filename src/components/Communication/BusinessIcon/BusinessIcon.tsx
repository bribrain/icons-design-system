import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IBusinessIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function BusinessIcon({ size = 24, rotate = 0, color = "grey-100" }: IBusinessIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 7.38318V5.38318C12 4.28318 11.1 3.38318 10 3.38318H4C2.9 3.38318 2 4.28318 2 5.38318V19.3832C2 20.4832 2.9 21.3832 4 21.3832H20C21.1 21.3832 22 20.4832 22 19.3832V9.38318C22 8.28318 21.1 7.38318 20 7.38318H12ZM6 19.3832H4V17.3832H6V19.3832ZM6 15.3832H4V13.3832H6V15.3832ZM6 11.3832H4V9.38318H6V11.3832ZM6 7.38318H4V5.38318H6V7.38318ZM10 19.3832H8V17.3832H10V19.3832ZM10 15.3832H8V13.3832H10V15.3832ZM10 11.3832H8V9.38318H10V11.3832ZM10 7.38318H8V5.38318H10V7.38318ZM19 19.3832H12V17.3832H14V15.3832H12V13.3832H14V11.3832H12V9.38318H19C19.55 9.38318 20 9.83318 20 10.3832V18.3832C20 18.9332 19.55 19.3832 19 19.3832ZM18 11.3832H16V13.3832H18V11.3832ZM18 15.3832H16V17.3832H18V15.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}
