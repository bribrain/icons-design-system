import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IAddIcCallIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function AddIcCallIcon({ size = 24, rotate = 0, color = "grey-100" }: IAddIcCallIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 8.38318H16V10.3832C16 10.9332 16.45 11.3832 17 11.3832C17.55 11.3832 18 10.9332 18 10.3832V8.38318H20C20.55 8.38318 21 7.93318 21 7.38318C21 6.83318 20.55 6.38318 20 6.38318H18V4.38318C18 3.83318 17.55 3.38318 17 3.38318C16.45 3.38318 16 3.83318 16 4.38318V6.38318H14C13.45 6.38318 13 6.83318 13 7.38318C13 7.93318 13.45 8.38318 14 8.38318ZM19.21 15.6532L16.67 15.3632C16.06 15.2932 15.46 15.5032 15.03 15.9332L13.19 17.7732C10.36 16.3332 8.03997 14.0232 6.59997 11.1832L8.44997 9.33318C8.87997 8.90318 9.08997 8.29318 9.01997 7.69318L8.72997 5.17318C8.61997 4.16318 7.75997 3.39318 6.74997 3.39318H5.01997C3.88997 3.39318 2.94997 4.33318 3.01997 5.46318C3.54997 14.0032 10.38 20.8232 18.91 21.3532C20.04 21.4232 20.98 20.4832 20.98 19.3532V17.6232C20.99 16.6232 20.22 15.7632 19.21 15.6532Z"
        fill={colorCode}
      />
    </svg>
  )
}
