import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IDomainVerificationIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function DomainVerificationIcon({ size = 24, rotate = 0, color = "grey-100" }: IDomainVerificationIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.23 16.2131C10.62 16.6031 11.25 16.6031 11.64 16.2131L15.88 11.9731C16.27 11.5831 16.27 10.9531 15.88 10.5531C15.49 10.1631 14.86 10.1631 14.47 10.5531L10.93 14.0831L9.51997 12.6731C9.12997 12.2831 8.49997 12.2831 8.09997 12.6731C7.69997 13.0631 7.70997 13.6931 8.09997 14.0831L10.23 16.2131Z"
        fill={colorCode}
      />
      <path
        d="M19 4.38318H5C3.89 4.38318 3 5.28318 3 6.38318V18.3832C3 19.4832 3.89 20.3832 5 20.3832H19C20.1 20.3832 21 19.4832 21 18.3832V6.38318C21 5.28318 20.11 4.38318 19 4.38318ZM19 17.3832C19 17.9332 18.55 18.3832 18 18.3832H6C5.45 18.3832 5 17.9332 5 17.3832V8.38318H19V17.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}
