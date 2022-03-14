import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IWifiTetheringIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function WifiTetheringIcon({ size = 24, rotate = 0, color = "grey-100" }: IWifiTetheringIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 11.3832C10.9 11.3832 9.99999 12.2832 9.99999 13.3832C9.99999 14.4832 10.9 15.3832 12 15.3832C13.1 15.3832 14 14.4832 14 13.3832C14 12.2832 13.1 11.3832 12 11.3832ZM18 13.3832C18 9.82319 14.89 6.98319 11.25 7.43319C8.62999 7.75319 6.46999 9.84319 6.06999 12.4532C5.73999 14.6032 6.55999 16.5632 7.99999 17.8532C8.47999 18.2832 9.22999 18.1832 9.55999 17.6232L9.56999 17.6132C9.80999 17.1932 9.70999 16.6832 9.34999 16.3532C8.31999 15.4232 7.75999 13.9832 8.12999 12.4132C8.45999 10.9932 9.60999 9.84319 11.03 9.50319C13.65 8.87319 16 10.8532 16 13.3832C16 14.5632 15.48 15.6132 14.67 16.3432C14.31 16.6632 14.2 17.1832 14.44 17.6032L14.45 17.6132C14.76 18.1432 15.48 18.3032 15.95 17.8932C17.2 16.7932 18 15.1832 18 13.3832ZM10.83 3.45319C6.20999 3.97319 2.47999 7.78319 2.04999 12.4132C1.69999 16.1132 3.36999 19.4332 6.06999 21.4232C6.54999 21.7732 7.22999 21.6232 7.52999 21.1132C7.77999 20.6832 7.66999 20.1232 7.26999 19.8232C4.98999 18.1332 3.61999 15.2732 4.10999 12.1232C4.64999 8.62319 7.56999 5.83319 11.09 5.44319C15.91 4.89319 20 8.66319 20 13.3832C20 16.0332 18.71 18.3632 16.73 19.8232C16.33 20.1232 16.22 20.6732 16.47 21.1132C16.77 21.6332 17.45 21.7732 17.93 21.4232C20.4 19.6032 22 16.6832 22 13.3832C22 7.47319 16.87 2.76319 10.83 3.45319Z"
        fill={colorCode}
      />
    </svg>
  )
}
