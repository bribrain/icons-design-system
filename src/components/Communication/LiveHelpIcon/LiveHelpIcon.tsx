import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface ILiveHelpIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function LiveHelpIcon({ size = 24, rotate = 0, color = "grey-100" }: ILiveHelpIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19 2.38318H5C3.89 2.38318 3 3.28318 3 4.38318V18.3832C3 19.4832 3.9 20.3832 5 20.3832H9L11.29 22.6732C11.68 23.0632 12.31 23.0632 12.7 22.6732L15 20.3832H19C20.1 20.3832 21 19.4832 21 18.3832V4.38318C21 3.28318 20.1 2.38318 19 2.38318ZM13 18.3832H11V16.3832H13V18.3832ZM15.07 10.6332L14.17 11.5532C13.59 12.1432 13.18 12.6532 13.05 13.6132C12.99 14.0432 12.64 14.3732 12.2 14.3732H11.89C11.37 14.3732 10.97 13.9132 11.04 13.3932C11.15 12.4832 11.57 11.6732 12.18 11.0532L13.42 9.79318C13.78 9.43318 14 8.93318 14 8.38318C14 7.28318 13.1 6.38318 12 6.38318C11.13 6.38318 10.38 6.95318 10.11 7.73318C9.98 8.10318 9.67 8.37318 9.28 8.37318H8.98C8.4 8.37318 8 7.81318 8.16 7.25318C8.65 5.59318 10.18 4.38318 12 4.38318C14.21 4.38318 16 6.17318 16 8.38318C16 9.26318 15.64 10.0632 15.07 10.6332Z"
        fill={colorCode}
      />
    </svg>
  )
}
