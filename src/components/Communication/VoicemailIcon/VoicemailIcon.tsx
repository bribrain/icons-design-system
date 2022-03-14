import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IVoicemailIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function VoicemailIcon({ size = 24, rotate = 0, color = "grey-100" }: IVoicemailIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.5 6.38318C15.46 6.38318 13 8.84318 13 11.8832C13 13.2132 13.47 14.4332 14.26 15.3832H9.74C10.53 14.4332 11 13.2132 11 11.8832C11 8.84318 8.54 6.38318 5.5 6.38318C2.46 6.38318 0 8.84318 0 11.8832C0 14.9232 2.46 17.3832 5.5 17.3832H18.5C21.54 17.3832 24 14.9232 24 11.8832C24 8.84318 21.54 6.38318 18.5 6.38318ZM5.5 15.3832C3.57 15.3832 2 13.8132 2 11.8832C2 9.95318 3.57 8.38318 5.5 8.38318C7.43 8.38318 9 9.95318 9 11.8832C9 13.8132 7.43 15.3832 5.5 15.3832ZM18.5 15.3832C16.57 15.3832 15 13.8132 15 11.8832C15 9.95318 16.57 8.38318 18.5 8.38318C20.43 8.38318 22 9.95318 22 11.8832C22 13.8132 20.43 15.3832 18.5 15.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}
