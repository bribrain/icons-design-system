import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface ISignalWifiOffIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function SignalWifiOffIcon({ size = 24, rotate = 0, color = "grey-100" }: ISignalWifiOffIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M23.64 7.38321C23.19 7.04321 18.71 3.38321 12 3.38321C10.68 3.38321 9.44999 3.52321 8.30999 3.76321L18.43 13.8832L23.64 7.38321ZM4.11999 2.39321C3.72999 2.00321 3.09999 2.00321 2.70999 2.39321C2.31999 2.78321 2.31999 3.41321 2.70999 3.80321L4.05999 5.15321C1.90999 6.14321 0.589985 7.20321 0.359985 7.38321L10.44 19.9432C11.24 20.9432 12.76 20.9432 13.56 19.9432L15.91 17.0132L18.52 19.6232C18.91 20.0132 19.54 20.0132 19.93 19.6232C20.32 19.2332 20.32 18.6032 19.93 18.2132L4.11999 2.39321Z"
        fill={colorCode}
      />
    </svg>
  )
}
