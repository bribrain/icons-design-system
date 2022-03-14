import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface ISentimentSatisfiedAltIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function SentimentSatisfiedAltIcon({ size = 24, rotate = 0, color = "grey-100" }: ISentimentSatisfiedAltIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.5 11.3832C16.3284 11.3832 17 10.7116 17 9.88318C17 9.05475 16.3284 8.38318 15.5 8.38318C14.6716 8.38318 14 9.05475 14 9.88318C14 10.7116 14.6716 11.3832 15.5 11.3832Z" fill={colorCode} />
      <path d="M8.5 11.3832C9.32843 11.3832 10 10.7116 10 9.88318C10 9.05475 9.32843 8.38318 8.5 8.38318C7.67157 8.38318 7 9.05475 7 9.88318C7 10.7116 7.67157 11.3832 8.5 11.3832Z" fill={colorCode} />
      <path
        d="M11.99 2.38318C6.47 2.38318 2 6.86318 2 12.3832C2 17.9032 6.47 22.3832 11.99 22.3832C17.52 22.3832 22 17.9032 22 12.3832C22 6.86318 17.52 2.38318 11.99 2.38318ZM12 20.3832C7.58 20.3832 4 16.8032 4 12.3832C4 7.96318 7.58 4.38318 12 4.38318C16.42 4.38318 20 7.96318 20 12.3832C20 16.8032 16.42 20.3832 12 20.3832ZM16.41 14.2732C16.06 14.0532 15.59 14.1632 15.38 14.5132C14.64 15.6832 13.38 16.3832 12 16.3832C10.62 16.3832 9.36 15.6832 8.62 14.5032C8.4 14.1532 7.94 14.0432 7.59 14.2632C7.24 14.4832 7.13 14.9432 7.35 15.2932C8.37 16.9232 10.1 17.8832 12 17.8832C13.9 17.8832 15.63 16.9132 16.65 15.3032C16.87 14.9532 16.76 14.4932 16.41 14.2732Z"
        fill={colorCode}
      />
    </svg>
  )
}
