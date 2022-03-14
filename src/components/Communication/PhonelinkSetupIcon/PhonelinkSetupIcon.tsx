import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IPhonelinkSetupIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function PhonelinkSetupIcon({ size = 24, rotate = 0, color = "grey-100" }: IPhonelinkSetupIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.99997 3.38318V5.38318C6.99997 5.93318 7.44997 6.38318 7.99997 6.38318C8.54997 6.38318 8.99997 5.93318 8.99997 5.38318V4.38318H19V20.3832H8.99997V19.3832C8.99997 18.8332 8.54997 18.3832 7.99997 18.3832C7.44997 18.3832 6.99997 18.8332 6.99997 19.3832V21.3832C6.99997 22.4832 7.89997 23.3832 8.99997 23.3832H19C20.1 23.3832 21 22.4832 21 21.3832V3.38318C21 2.28318 20.1 1.38318 19 1.38318H8.99997C7.89997 1.38318 6.99997 2.28318 6.99997 3.38318ZM9.49997 15.8832C9.78997 15.7632 10.05 15.5932 10.3 15.4032L10.28 15.4332L11.29 15.8232C11.52 15.9132 11.78 15.8232 11.9 15.6032L12.74 14.1432C12.86 13.9332 12.81 13.6532 12.62 13.5032L11.77 12.8232L11.75 12.8532C11.77 12.6932 11.8 12.5332 11.8 12.3732C11.8 12.2132 11.77 12.0532 11.75 11.8932L11.77 11.9232L12.62 11.2432C12.81 11.0932 12.86 10.8132 12.74 10.6032L11.9 9.14318C11.78 8.93318 11.52 8.83318 11.29 8.92318L10.28 9.31318L10.3 9.34318C10.05 9.17318 9.78997 9.00318 9.49997 8.88318L9.32997 7.80318C9.29997 7.56318 9.08997 7.38318 8.83997 7.38318H7.15997C6.90997 7.38318 6.69997 7.56318 6.66997 7.80318L6.49997 8.88318C6.20997 9.00318 5.94997 9.17318 5.69997 9.36318L5.71997 9.33318L4.69997 8.94318C4.46997 8.85318 4.20997 8.94318 4.08997 9.16318L3.24997 10.6232C3.12997 10.8332 3.17997 11.1132 3.36997 11.2632L4.21997 11.9432L4.23997 11.9132C4.21997 12.0632 4.18997 12.2232 4.18997 12.3832C4.18997 12.5432 4.21997 12.7032 4.23997 12.8632L4.21997 12.8332L3.36997 13.5132C3.17997 13.6632 3.12997 13.9432 3.24997 14.1532L4.08997 15.6132C4.20997 15.8232 4.46997 15.9232 4.69997 15.8332L5.70997 15.4432L5.69997 15.4032C5.94997 15.5932 6.20997 15.7632 6.49997 15.8832L6.66997 16.9532C6.69997 17.2032 6.90997 17.3832 7.15997 17.3832H8.83997C9.08997 17.3832 9.29997 17.2032 9.32997 16.9632L9.49997 15.8832ZM5.99997 12.3832C5.99997 11.2832 6.89997 10.3832 7.99997 10.3832C9.09997 10.3832 9.99997 11.2832 9.99997 12.3832C9.99997 13.4832 9.09997 14.3832 7.99997 14.3832C6.89997 14.3832 5.99997 13.4832 5.99997 12.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}