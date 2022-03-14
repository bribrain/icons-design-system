import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface ICallEndIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function CallEndIcon({ size = 24, rotate = 0, color = "grey-100" }: ICallEndIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.51004 15.8632L6.51004 14.2732C6.99004 13.8932 7.27003 13.3132 7.27003 12.7032V10.1032C10.29 9.12316 13.56 9.11316 16.59 10.1032V12.7132C16.59 13.3232 16.87 13.9032 17.35 14.2832L19.34 15.8632C20.14 16.4932 21.28 16.4332 22 15.7132L23.22 14.4932C24.02 13.6932 24.02 12.3632 23.17 11.6132C16.76 5.95316 7.10003 5.95316 0.690035 11.6132C-0.159965 12.3632 -0.159965 13.6932 0.640035 14.4932L1.86003 15.7132C2.57003 16.4332 3.71004 16.4932 4.51004 15.8632Z"
        fill={colorCode}
      />
    </svg>
  )
}
