import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IUnsubscribeIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function UnsubscribeIcon({ size = 24, rotate = 0, color = "grey-100" }: IUnsubscribeIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.5 11.8832C19.42 11.8832 20.25 12.1432 20.99 12.5732V5.38318C20.99 4.28318 20.1 3.38318 19 3.38318H5C3.9 3.38318 3 4.28318 3 5.38318V15.3832C3 16.4832 3.9 17.3832 5 17.3832H13.55C13.53 17.2132 13.5 17.0532 13.5 16.8832C13.5 14.1232 15.74 11.8832 18.5 11.8832ZM12.89 10.4332C12.33 10.7132 11.66 10.7132 11.1 10.4332L5.49 7.63318C5.19 7.48318 5 7.17318 5 6.83318C5 6.17318 5.7 5.73318 6.29 6.03318L12 8.88318L17.71 6.03318C18.3 5.73318 19 6.16318 19 6.83318C19 7.17318 18.81 7.48318 18.51 7.63318L12.89 10.4332ZM18.5 13.3832C16.57 13.3832 15 14.9532 15 16.8832C15 18.8132 16.57 20.3832 18.5 20.3832C20.43 20.3832 22 18.8132 22 16.8832C22 14.9532 20.43 13.3832 18.5 13.3832ZM20.5 16.8832C20.5 17.1632 20.28 17.3832 20 17.3832H17C16.72 17.3832 16.5 17.1632 16.5 16.8832C16.5 16.6032 16.72 16.3832 17 16.3832H20C20.28 16.3832 20.5 16.6032 20.5 16.8832Z"
        fill={colorCode}
      />
    </svg>
  )
}
