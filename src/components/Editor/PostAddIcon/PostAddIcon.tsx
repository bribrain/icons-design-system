import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IPostAddIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function PostAddIcon({ size = 24, rotate = 0, color = "grey-100" }: IPostAddIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 12.3832C17.45 12.3832 17 12.8332 17 13.3832V18.6032C17 19.1532 16.55 19.6032 16 19.6032H6C5.45 19.6032 5 19.1532 5 18.6032V8.38318C5 7.83318 5.45 7.38318 6 7.38318H11C11.55 7.38318 12 6.93318 12 6.38318C12 5.83318 11.55 5.38318 11 5.38318H5C3.9 5.38318 3 6.28318 3 7.38318V19.3832C3 20.4832 3.9 21.3832 5 21.3832H17C18.1 21.3832 19 20.4832 19 19.3832V13.3832C19 12.8332 18.55 12.3832 18 12.3832Z"
        fill={colorCode}
      />
      <path
        d="M21.02 5.38318H19V3.36318C19 2.82318 18.56 2.38318 18.02 2.38318H17.99C17.44 2.38318 17 2.82318 17 3.36318V5.38318H14.99C14.45 5.38318 14.01 5.82318 14 6.36318C14 6.37318 14 6.38318 14 6.39318C14 6.94318 14.44 7.38318 14.99 7.38318H17V9.39318C17 9.93318 17.44 10.3832 17.99 10.3732C18 10.3732 18.01 10.3732 18.02 10.3732C18.56 10.3732 19 9.93318 19 9.39318V7.38318H21.02C21.56 7.38318 22 6.94318 22 6.40318V6.36318C22 5.82318 21.56 5.38318 21.02 5.38318Z"
        fill={colorCode}
      />
      <path d="M14 9.38318H8C7.45 9.38318 7 9.83318 7 10.3832C7 10.9332 7.45 11.3832 8 11.3832H14C14.55 11.3832 15 10.9332 15 10.3832C15 9.83318 14.55 9.38318 14 9.38318Z" fill={colorCode} />
      <path d="M14 12.3832H8C7.45 12.3832 7 12.8332 7 13.3832C7 13.9332 7.45 14.3832 8 14.3832H14C14.55 14.3832 15 13.9332 15 13.3832C15 12.8332 14.55 12.3832 14 12.3832Z" fill={colorCode} />
      <path d="M14 15.3832H8C7.45 15.3832 7 15.8332 7 16.3832C7 16.9332 7.45 17.3832 8 17.3832H14C14.55 17.3832 15 16.9332 15 16.3832C15 15.8332 14.55 15.3832 14 15.3832Z" fill={colorCode} />
    </svg>
  )
}