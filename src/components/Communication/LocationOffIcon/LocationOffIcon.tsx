import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface ILocationOffIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function LocationOffIcon({ size = 24, rotate = 0, color = "grey-100" }: ILocationOffIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.70998 3.94318C2.31998 4.33318 2.31998 4.96318 2.70998 5.35318L5.17998 7.82318C5.06998 8.33318 4.99998 8.85318 4.99998 9.38318C4.99998 13.5532 9.41998 19.3032 11.23 21.4932C11.63 21.9732 12.36 21.9732 12.76 21.4932C13.41 20.7132 14.38 19.4832 15.37 18.0332L18.02 20.6832C18.41 21.0732 19.04 21.0732 19.43 20.6832C19.82 20.2932 19.82 19.6632 19.43 19.2732L4.11998 3.94318C3.72998 3.55318 3.09998 3.55318 2.70998 3.94318ZM12 2.38318C10.16 2.38318 8.49998 3.09318 7.24998 4.24318L10.44 7.43318C10.87 7.09318 11.41 6.88318 12 6.88318C13.38 6.88318 14.5 8.00318 14.5 9.38318C14.5 9.97318 14.29 10.5132 13.94 10.9432L17.49 14.4932C18.37 12.7432 19 10.9532 19 9.38318C19 5.51318 15.87 2.38318 12 2.38318Z"
        fill={colorCode}
      />
    </svg>
  )
}
