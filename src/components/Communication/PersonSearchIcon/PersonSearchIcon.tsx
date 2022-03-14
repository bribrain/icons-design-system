import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IPersonSearchIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function PersonSearchIcon({ size = 24, rotate = 0, color = "grey-100" }: IPersonSearchIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 12.3832C12.2091 12.3832 14 10.5923 14 8.38318C14 6.17404 12.2091 4.38318 10 4.38318C7.79086 4.38318 6 6.17404 6 8.38318C6 10.5923 7.79086 12.3832 10 12.3832Z" fill={colorCode} />
      <path d="M10.35 14.3932C7.62 14.2932 2 15.6532 2 18.3832V19.3832C2 19.9332 2.45 20.3832 3 20.3832H11.54C9.07 17.6232 10.31 14.4932 10.35 14.3932Z" fill={colorCode} />
      <path
        d="M19.43 18.4032C19.9 17.6032 20.13 16.6332 19.91 15.5832C19.57 13.9432 18.19 12.6332 16.53 12.4232C13.9 12.0832 11.68 14.2932 12.03 16.9232C12.25 18.5832 13.55 19.9632 15.19 20.3032C16.24 20.5232 17.21 20.2932 18.01 19.8232L19.87 21.6832C20.26 22.0732 20.89 22.0732 21.28 21.6832C21.67 21.2932 21.67 20.6632 21.28 20.2732L19.43 18.4032ZM16 18.3832C14.9 18.3832 14 17.4832 14 16.3832C14 15.2832 14.9 14.3832 16 14.3832C17.1 14.3832 18 15.2832 18 16.3832C18 17.4832 17.1 18.3832 16 18.3832Z"
        fill={colorCode}
      />
    </svg>
  )
}
