import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IMoneyOffIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function MoneyOffIcon({ size = 24, rotate = 0, color = "grey-100" }: IMoneyOffIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.5 7.28318C13.92 7.28318 14.63 7.82318 14.89 8.68318C15.02 9.11318 15.45 9.38318 15.9 9.38318H15.96C16.66 9.38318 17.18 8.67318 16.93 8.02318C16.49 6.87318 15.52 5.94318 14 5.57318V4.88318C14 4.05318 13.33 3.38318 12.5 3.38318C11.67 3.38318 11 4.05318 11 4.88318V5.54318C10.61 5.62318 10.25 5.75318 9.90004 5.90318L11.41 7.41318C11.73 7.33318 12.1 7.28318 12.5 7.28318ZM4.77004 5.00318C4.38004 5.39318 4.38004 6.02318 4.77004 6.41318L7.50004 9.15318C7.50004 11.2332 9.06004 12.3732 11.41 13.0632L14.92 16.5732C14.58 17.0632 13.87 17.4832 12.5 17.4832C10.85 17.4832 10 16.8932 9.67004 16.0532C9.52004 15.6632 9.18004 15.3832 8.77004 15.3832H8.60004C7.88004 15.3832 7.36004 16.1232 7.65004 16.7732C8.24004 18.1032 9.54004 18.8932 11.01 19.2132V19.8832C11.01 20.7132 11.68 21.3832 12.51 21.3832C13.34 21.3832 14.01 20.7132 14.01 19.8832V19.2332C14.97 19.0532 15.84 18.6832 16.47 18.1132L17.98 19.6232C18.37 20.0132 19 20.0132 19.39 19.6232C19.78 19.2332 19.78 18.6032 19.39 18.2132L6.18004 5.00318C5.79004 4.61318 5.16004 4.61318 4.77004 5.00318Z"
        fill={colorCode}
      />
    </svg>
  )
}
