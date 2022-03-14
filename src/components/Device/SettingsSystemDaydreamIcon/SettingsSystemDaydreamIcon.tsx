import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface ISettingsSystemDaydreamIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function SettingsSystemDaydreamIcon({ size = 24, rotate = 0, color = "grey-100" }: ISettingsSystemDaydreamIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9 16.3832H15.5C16.88 16.3832 18 15.2632 18 13.8832C18 12.5032 16.88 11.3832 15.5 11.3832H15.45C15.21 9.69318 13.76 8.38318 12 8.38318C10.6 8.38318 9.4 9.21318 8.84 10.4032H8.68C7.17 10.5632 6 11.8332 6 13.3832C6 15.0432 7.34 16.3832 9 16.3832ZM21 3.38318H3C1.9 3.38318 1 4.28318 1 5.38318V19.3832C1 20.4832 1.9 21.3832 3 21.3832H21C22.1 21.3832 23 20.4832 23 19.3832V5.38318C23 4.28318 22.1 3.38318 21 3.38318ZM20 19.3932H4C3.45 19.3932 3 18.9432 3 18.3932V6.37318C3 5.82318 3.45 5.37318 4 5.37318H20C20.55 5.37318 21 5.82318 21 6.37318V18.3932C21 18.9432 20.55 19.3932 20 19.3932Z"
        fill={colorCode}
      />
    </svg>
  )
}
