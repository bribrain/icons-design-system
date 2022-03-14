import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IAirplanemodeActiveProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function AirplanemodeActive({ size = 24, rotate = 0, color = "grey-100" }: IAirplanemodeActiveProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.48 14.0832L13.5 9.38318V3.88318C13.5 3.05318 12.83 2.38318 12 2.38318C11.17 2.38318 10.5 3.05318 10.5 3.88318V9.38318L2.52 14.0832C2.2 14.2632 2 14.6132 2 14.9832C2 15.6832 2.67 16.1832 3.34 15.9932L10.5 13.8932V19.3832L8.24 20.7332C8.09 20.8232 8 20.9932 8 21.1632V21.6632V21.7432C8 22.0732 8.31 22.3132 8.62 22.2332L11.54 21.5032L12 21.3832L12.38 21.4732L12.8 21.5832L14.7 22.0632L15.37 22.2332C15.69 22.3132 15.99 22.0732 15.99 21.7432V21.3732V21.1632C15.99 20.9832 15.9 20.8232 15.75 20.7332L13.5 19.3832V13.8832L20.66 15.9832C21.33 16.1832 22 15.6832 22 14.9832C22 14.6132 21.8 14.2632 21.48 14.0832Z"
        fill={colorCode}
      />
    </svg>
  )
}
