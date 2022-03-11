import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IContentPasteIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function ContentPasteIcon({ size = 24, rotate = 0, color = "grey-100" }: IContentPasteIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_73_3360)">
        <path
          d="M19 2.3833H14.82C14.4 1.2233 13.3 0.383301 12 0.383301C10.7 0.383301 9.6 1.2233 9.18 2.3833H5C3.9 2.3833 3 3.2833 3 4.3833V20.3833C3 21.4833 3.9 22.3833 5 22.3833H19C20.1 22.3833 21 21.4833 21 20.3833V4.3833C21 3.2833 20.1 2.3833 19 2.3833ZM12 2.3833C12.55 2.3833 13 2.8333 13 3.3833C13 3.9333 12.55 4.3833 12 4.3833C11.45 4.3833 11 3.9333 11 3.3833C11 2.8333 11.45 2.3833 12 2.3833ZM18 20.3833H6C5.45 20.3833 5 19.9333 5 19.3833V5.3833C5 4.8333 5.45 4.3833 6 4.3833H7V5.3833C7 6.4833 7.9 7.3833 9 7.3833H15C16.1 7.3833 17 6.4833 17 5.3833V4.3833H18C18.55 4.3833 19 4.8333 19 5.3833V19.3833C19 19.9333 18.55 20.3833 18 20.3833Z"
          fill={colorCode}
        />
      </g>
      <defs>
        <clipPath id="clip0_73_3360">
          <rect width="24" height="24" fill="white" transform="translate(0 0.383301)" />
        </clipPath>
      </defs>
    </svg>
  )
}
