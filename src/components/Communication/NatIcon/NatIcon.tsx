import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface INatIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function NatIcon({ size = 24, rotate = 0, color = "grey-100" }: INatIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.82 13.3832H11V11.3832H6.82C6.4 10.2232 5.3 9.38318 4 9.38318C2.34 9.38318 1 10.7232 1 12.3832C1 14.0432 2.34 15.3832 4 15.3832C5.3 15.3832 6.4 14.5432 6.82 13.3832ZM4 13.3832C3.45 13.3832 3 12.9332 3 12.3832C3 11.8332 3.45 11.3832 4 11.3832C4.55 11.3832 5 11.8332 5 12.3832C5 12.9332 4.55 13.3832 4 13.3832Z"
        fill={colorCode}
      />
      <path
        d="M22.47 12.7831C22.74 12.5831 22.74 12.1831 22.47 11.9831L19 9.38313V11.3831H14.95C14.48 6.69313 10.79 2.96313 6.12 2.44313C5.52 2.38313 5 2.84313 5 3.44313C5 3.94313 5.37 4.37313 5.87 4.43313C9.88 4.86313 13 8.25313 13 12.3831C13 16.5131 9.88 19.9031 5.87 20.3331C5.37 20.3931 5 20.8231 5 21.3231C5 21.9231 5.52 22.3931 6.11 22.3231C10.78 21.8031 14.48 18.0731 14.94 13.3831H19V15.3831L22.47 12.7831Z"
        fill={colorCode}
      />
    </svg>
  )
}
