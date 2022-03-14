import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IInsertInvitationIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function InsertInvitationIcon({ size = 24, rotate = 0, color = "grey-100" }: IInsertInvitationIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 12.3832H13C12.45 12.3832 12 12.8332 12 13.3832V16.3832C12 16.9332 12.45 17.3832 13 17.3832H16C16.55 17.3832 17 16.9332 17 16.3832V13.3832C17 12.8332 16.55 12.3832 16 12.3832ZM16 2.38318V3.38318H8V2.38318C8 1.83318 7.55 1.38318 7 1.38318C6.45 1.38318 6 1.83318 6 2.38318V3.38318H5C3.89 3.38318 3.01 4.28318 3.01 5.38318L3 19.3832C3 20.4832 3.89 21.3832 5 21.3832H19C20.1 21.3832 21 20.4832 21 19.3832V5.38318C21 4.28318 20.1 3.38318 19 3.38318H18V2.38318C18 1.83318 17.55 1.38318 17 1.38318C16.45 1.38318 16 1.83318 16 2.38318ZM18 19.3832H6C5.45 19.3832 5 18.9332 5 18.3832V8.38318H19V18.3832C19 18.9332 18.55 19.3832 18 19.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}
