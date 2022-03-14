import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IStopScreenShareIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function StopScreenShareIcon({ size = 24, rotate = 0, color = "grey-100" }: IStopScreenShareIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M23 18.3832H21.8L23.59 20.1732C23.83 19.9932 24 19.7132 24 19.3832C24 18.8332 23.55 18.3832 23 18.3832ZM3.23 2.66317C2.84 2.27317 2.2 2.27317 1.81 2.66317C1.42 3.05317 1.42 3.68317 1.81 4.07317L2.65 4.93317C2.65 4.93317 1.99 5.50317 1.99 6.40317C2 7.30317 2 16.3832 2 16.3832L2.01 16.3932C2.01 17.4832 2.89 18.3732 3.98 18.3832H1C0.45 18.3832 0 18.8332 0 19.3832C0 19.9332 0.45 20.3832 1 20.3832H18.13L20.13 22.3832C20.52 22.7732 21.15 22.7732 21.54 22.3832C21.93 21.9932 21.93 21.3632 21.54 20.9732L3.23 2.66317ZM7 15.3832C7.31 13.9032 7.94 12.4532 9.08 11.3332L10.67 12.9232C9.13 13.3032 7.96 14.0932 7 15.3832ZM13 9.51317V8.53317C13 8.09317 13.52 7.87317 13.84 8.16317L15 9.25317L16.61 10.7532C16.82 10.9532 16.82 11.2832 16.61 11.4832L15.72 12.3132L21.3 17.8932C21.73 17.5232 22 16.9932 22 16.3832V6.38317C22 5.29317 21.11 4.40317 20.02 4.40317H7.8L12.94 9.53317C12.96 9.52317 12.98 9.51317 13 9.51317Z"
        fill={colorCode}
      />
    </svg>
  )
}
