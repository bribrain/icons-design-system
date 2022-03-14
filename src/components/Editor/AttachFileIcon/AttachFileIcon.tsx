import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IAttachFileIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function AttachFileIcon({ size = 24, rotate = 0, color = "grey-100" }: IAttachFileIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.5 7.1332V17.7132C16.5 19.8032 14.97 21.6632 12.89 21.8632C10.5 22.0932 8.5 20.2232 8.5 17.8832V5.5232C8.5 4.2132 9.44 3.0232 10.74 2.8932C12.24 2.7432 13.5 3.9132 13.5 5.3832V15.8832C13.5 16.4332 13.05 16.8832 12.5 16.8832C11.95 16.8832 11.5 16.4332 11.5 15.8832V7.1332C11.5 6.7232 11.16 6.3832 10.75 6.3832C10.34 6.3832 10 6.7232 10 7.1332V15.7432C10 17.0532 10.94 18.2432 12.24 18.3732C13.74 18.5232 15 17.3532 15 15.8832V5.5532C15 3.4632 13.47 1.6032 11.39 1.4032C9.01 1.1732 7 3.0432 7 5.3832V17.6532C7 20.5232 9.1 23.0932 11.96 23.3632C15.25 23.6632 18 21.1032 18 17.8832V7.1332C18 6.7232 17.66 6.3832 17.25 6.3832C16.84 6.3832 16.5 6.7232 16.5 7.1332Z"
        fill={colorCode}
      />
    </svg>
  )
}
