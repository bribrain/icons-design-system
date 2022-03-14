import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IWifiCallingIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function WifiCallingIcon({ size = 24, rotate = 0, color = "grey-100" }: IWifiCallingIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 5.33318C21.79 5.16318 19.67 3.38318 16.5 3.38318C13.32 3.38318 11.21 5.16318 11 5.33318L16.5 12.3832L22 5.33318Z" fill={colorCode} />
      <path
        d="M19.2 15.6632L16.66 15.3732C16.05 15.3032 15.45 15.5132 15.02 15.9432L13.18 17.7832C10.35 16.3432 8.03001 14.0332 6.59001 11.1932L8.44001 9.34321C8.87001 8.91321 9.08001 8.30321 9.01001 7.70321L8.72001 5.18321C8.60001 4.17321 7.75001 3.41321 6.73001 3.41321H5.00001C3.87001 3.41321 2.93001 4.35321 3.00001 5.48321C3.53001 14.0232 10.36 20.8532 18.9 21.3832C20.03 21.4532 20.97 20.5132 20.97 19.3832V17.6532C20.97 16.6332 20.21 15.7832 19.2 15.6632Z"
        fill={colorCode}
      />
    </svg>
  )
}
