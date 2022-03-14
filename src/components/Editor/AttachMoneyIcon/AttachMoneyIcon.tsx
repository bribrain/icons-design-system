import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IAttachMoneyIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function AttachMoneyIcon({ size = 24, rotate = 0, color = "grey-100" }: IAttachMoneyIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.8 11.2832C9.53 10.6932 8.8 10.0832 8.8 9.13318C8.8 8.04318 9.81 7.28318 11.5 7.28318C12.92 7.28318 13.63 7.82318 13.89 8.68318C14.01 9.08318 14.34 9.38318 14.76 9.38318H15.06C15.72 9.38318 16.19 8.73318 15.96 8.11318C15.54 6.93318 14.56 5.95318 13 5.57318V4.88318C13 4.05318 12.33 3.38318 11.5 3.38318C10.67 3.38318 10 4.05318 10 4.88318V5.54318C8.06 5.96318 6.5 7.22318 6.5 9.15318C6.5 11.4632 8.41 12.6132 11.2 13.2832C13.7 13.8832 14.2 14.7632 14.2 15.6932C14.2 16.3832 13.71 17.4832 11.5 17.4832C9.85 17.4832 9 16.8932 8.67 16.0532C8.52 15.6632 8.18 15.3832 7.77 15.3832H7.49C6.82 15.3832 6.35 16.0632 6.6 16.6832C7.17 18.0732 8.5 18.8932 10 19.2132V19.8832C10 20.7132 10.67 21.3832 11.5 21.3832C12.33 21.3832 13 20.7132 13 19.8832V19.2332C14.95 18.8632 16.5 17.7332 16.5 15.6832C16.5 12.8432 14.07 11.8732 11.8 11.2832Z"
        fill={colorCode}
      />
    </svg>
  )
}
