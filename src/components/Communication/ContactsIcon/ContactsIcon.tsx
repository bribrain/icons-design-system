import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IContactsIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function ContactsIcon({ size = 24, rotate = 0, color = "grey-100" }: IContactsIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_73_3585)">
        <path
          d="M19 0.383179H5C4.45 0.383179 4 0.833179 4 1.38318C4 1.93318 4.45 2.38318 5 2.38318H19C19.55 2.38318 20 1.93318 20 1.38318C20 0.833179 19.55 0.383179 19 0.383179ZM5 24.3832H19C19.55 24.3832 20 23.9332 20 23.3832C20 22.8332 19.55 22.3832 19 22.3832H5C4.45 22.3832 4 22.8332 4 23.3832C4 23.9332 4.45 24.3832 5 24.3832ZM20 4.38318H4C2.9 4.38318 2 5.28318 2 6.38318V18.3832C2 19.4832 2.9 20.3832 4 20.3832H20C21.1 20.3832 22 19.4832 22 18.3832V6.38318C22 5.28318 21.1 4.38318 20 4.38318ZM12 7.13318C13.24 7.13318 14.25 8.14318 14.25 9.38318C14.25 10.6232 13.24 11.6332 12 11.6332C10.76 11.6332 9.75 10.6232 9.75 9.38318C9.75 8.14318 10.76 7.13318 12 7.13318ZM17 17.3832H7V15.8832C7 14.2132 10.33 13.3832 12 13.3832C13.67 13.3832 17 14.2132 17 15.8832V17.3832Z"
          fill={colorCode}
        />
      </g>
      <defs>
        <clipPath id="clip0_73_3585">
          <rect width={size} height={size} fill="white" transform="translate(0 0.383179)" />
        </clipPath>
      </defs>
    </svg>
  )
}
