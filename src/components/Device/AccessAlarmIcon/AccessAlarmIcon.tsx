import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IAccessAlarmIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function AccessAlarmIcon({ size = 24, rotate = 0, color = "grey-100" }: IAccessAlarmIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.87 15.6332L12.5 13.6332V9.1032C12.5 8.7032 12.18 8.3832 11.78 8.3832H11.72C11.32 8.3832 11 8.7032 11 9.1032V13.8232C11 14.1732 11.18 14.5032 11.49 14.6832L15.14 16.8732C15.48 17.0732 15.92 16.9732 16.12 16.6332C16.33 16.2832 16.22 15.8332 15.87 15.6332ZM21.18 5.3932L18.1 2.8332C17.68 2.4832 17.05 2.5332 16.69 2.9632C16.34 3.3832 16.4 4.0132 16.82 4.3732L19.89 6.9332C20.31 7.2832 20.94 7.2332 21.3 6.8032C21.66 6.3832 21.6 5.7532 21.18 5.3932ZM4.10001 6.9332L7.17001 4.3732C7.60001 4.0132 7.66001 3.3832 7.30001 2.9632C6.95001 2.5332 6.32001 2.4832 5.90001 2.8332L2.82001 5.3932C2.40001 5.7532 2.34001 6.3832 2.70001 6.8032C3.05001 7.2332 3.68001 7.2832 4.10001 6.9332ZM12 4.3832C7.03001 4.3832 3.00001 8.4132 3.00001 13.3832C3.00001 18.3532 7.03001 22.3832 12 22.3832C16.97 22.3832 21 18.3532 21 13.3832C21 8.4132 16.97 4.3832 12 4.3832ZM12 20.3832C8.14001 20.3832 5.00001 17.2432 5.00001 13.3832C5.00001 9.5232 8.14001 6.3832 12 6.3832C15.86 6.3832 19 9.5232 19 13.3832C19 17.2432 15.86 20.3832 12 20.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}