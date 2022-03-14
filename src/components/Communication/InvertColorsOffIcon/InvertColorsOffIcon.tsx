import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IInvertColorsOffIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function InvertColorsOffIcon({ size = 24, rotate = 0, color = "grey-100" }: IInvertColorsOffIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 5.48319V9.53319L19.4 16.9332C20.55 14.0532 19.99 10.6532 17.65 8.32319L12.71 3.37319C12.32 2.98319 11.69 2.98319 11.3 3.37319L8.55996 6.09319L9.96996 7.50319L12 5.48319ZM3.68996 5.46319C3.29996 5.85319 3.29996 6.48319 3.68996 6.87319L5.76996 8.95319C3.22996 12.0932 3.41996 16.7032 6.33996 19.6332C7.89996 21.1832 9.94996 21.9632 12 21.9632C13.78 21.9632 15.56 21.3732 17.02 20.1932L19.02 22.1932C19.41 22.5832 20.04 22.5832 20.43 22.1932C20.82 21.8032 20.82 21.1732 20.43 20.7832L5.10996 5.46319C4.71996 5.07319 4.07996 5.07319 3.68996 5.46319ZM12 19.9732C10.4 19.9732 8.88996 19.3532 7.75996 18.2132C6.61996 17.0732 5.99996 15.5732 5.99996 13.9732C5.99996 12.6532 6.42996 11.4132 7.20996 10.3832L12 15.1732V19.9732Z"
        fill={colorCode}
      />
    </svg>
  )
}
