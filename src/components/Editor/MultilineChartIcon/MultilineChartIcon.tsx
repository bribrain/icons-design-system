import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IMultilineChartIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function MultilineChartIcon({ size = 24, rotate = 0, color = "grey-100" }: IMultilineChartIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.36 6.66318L21.3 6.60318C20.91 6.21318 20.27 6.23318 19.91 6.64318L17.73 9.09318C15.68 6.78318 12.83 5.38318 9.60997 5.38318C7.10997 5.38318 4.77997 6.25318 2.85997 7.68318C2.38997 8.03318 2.33997 8.72318 2.74997 9.13318L2.80997 9.19318C3.13997 9.52318 3.66997 9.58318 4.03997 9.30318C5.62997 8.10318 7.53997 7.38318 9.60997 7.38318C12.35 7.38318 14.7 8.64318 16.38 10.6232L13.5 13.8632L10.21 10.5732C9.81997 10.1832 9.18997 10.1832 8.79997 10.5732L2.67997 16.7032C2.30997 17.0732 2.30997 17.6832 2.67997 18.0532L2.82997 18.2032C3.19997 18.5732 3.80997 18.5732 4.17997 18.2032L9.49997 12.8732L12.75 16.1232C13.16 16.5332 13.82 16.5132 14.2 16.0832L17.55 12.3232C18.17 13.4432 18.63 14.7132 18.87 16.0532C18.95 16.5232 19.34 16.8732 19.82 16.8732H19.91C20.51 16.8732 20.96 16.3232 20.85 15.7332C20.53 13.8832 19.87 12.1932 18.96 10.7332L21.4 7.98318C21.74 7.60318 21.72 7.02318 21.36 6.66318Z"
        fill={colorCode}
      />
    </svg>
  )
}
