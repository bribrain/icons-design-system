import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IScreenRotationIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function ScreenRotationIcon({ size = 24, rotate = 0, color = "grey-100" }: IScreenRotationIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_73_3238)">
        <path
          d="M10.23 2.13318C9.64001 1.54318 8.69001 1.54318 8.11001 2.13318L1.75001 8.49318C1.16001 9.08318 1.16001 10.0332 1.75001 10.6132L13.77 22.6332C14.36 23.2232 15.31 23.2232 15.89 22.6332L22.25 16.2732C22.84 15.6832 22.84 14.7332 22.25 14.1532L10.23 2.13318ZM14.12 20.8632L3.52001 10.2632C3.13001 9.87318 3.13001 9.24318 3.52001 8.85318L8.47001 3.90318C8.86001 3.51318 9.49001 3.51318 9.88001 3.90318L20.49 14.5132C20.88 14.9032 20.88 15.5332 20.49 15.9232L15.54 20.8732C15.15 21.2532 14.51 21.2532 14.12 20.8632ZM17.61 1.78318C16.04 0.953178 14.06 0.353178 11.81 0.403178C11.63 0.403178 11.55 0.623178 11.67 0.753178L15.15 4.23318L16.48 2.90318C19.57 4.36318 21.82 7.27318 22.37 10.7632C22.43 11.1732 22.81 11.4532 23.23 11.3832C23.64 11.3232 23.92 10.9332 23.85 10.5232C23.25 6.72318 20.89 3.52318 17.61 1.78318ZM8.85001 20.5432L7.52001 21.8732C4.43001 20.4132 2.18001 17.5032 1.63001 14.0132C1.57001 13.6032 1.19001 13.3232 0.770013 13.3932C0.360013 13.4532 0.0800133 13.8432 0.150013 14.2532C0.750013 18.0632 3.11001 21.2632 6.39001 23.0032C7.96001 23.8332 9.94001 24.4332 12.19 24.3832C12.37 24.3832 12.45 24.1632 12.33 24.0332L8.85001 20.5432Z"
          fill={colorCode}
        />
      </g>
      <defs>
        <clipPath id="clip0_73_3238">
          <rect width={size} height={size} fill="white" transform="translate(0 0.383179)" />
        </clipPath>
      </defs>
    </svg>
  )
}