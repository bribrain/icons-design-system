import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IPhoneIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function PhoneIcon({ size = 24, rotate = 0, color = "grey-100" }: IPhoneIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.23 15.6432L16.69 15.3532C16.08 15.2832 15.48 15.4932 15.05 15.9232L13.21 17.7632C10.38 16.3232 8.06004 14.0132 6.62004 11.1732L8.47004 9.32319C8.90004 8.89319 9.11004 8.29319 9.04004 7.68319L8.75004 5.16319C8.63004 4.15319 7.78004 3.39319 6.76004 3.39319H5.03004C3.90004 3.39319 2.96004 4.33319 3.03004 5.46319C3.56004 14.0032 10.39 20.8232 18.92 21.3532C20.05 21.4232 20.99 20.4832 20.99 19.3532V17.6232C21 16.6132 20.24 15.7632 19.23 15.6432Z"
        fill={colorCode}
      />
    </svg>
  )
}
