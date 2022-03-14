import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface ITextFieldsIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function TextFieldsIcon({ size = 24, rotate = 0, color = "grey-100" }: ITextFieldsIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.5 5.88318C2.5 6.71318 3.17 7.38318 4 7.38318H7.5V17.8832C7.5 18.7132 8.17 19.3832 9 19.3832C9.83 19.3832 10.5 18.7132 10.5 17.8832V7.38318H14C14.83 7.38318 15.5 6.71318 15.5 5.88318C15.5 5.05318 14.83 4.38318 14 4.38318H4C3.17 4.38318 2.5 5.05318 2.5 5.88318ZM20 9.38318H14C13.17 9.38318 12.5 10.0532 12.5 10.8832C12.5 11.7132 13.17 12.3832 14 12.3832H15.5V17.8832C15.5 18.7132 16.17 19.3832 17 19.3832C17.83 19.3832 18.5 18.7132 18.5 17.8832V12.3832H20C20.83 12.3832 21.5 11.7132 21.5 10.8832C21.5 10.0532 20.83 9.38318 20 9.38318Z"
        fill={colorCode}
      />
    </svg>
  )
}
