import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IDataUsageIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function DataUsageIcon({ size = 24, rotate = 0, color = "grey-100" }: IDataUsageIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13 4.25321V4.27321C13 4.94321 13.45 5.50321 14.08 5.70321C16.93 6.59321 19 9.24321 19 12.3832C19 12.9032 18.94 13.3932 18.83 13.8732C18.69 14.5132 18.95 15.1732 19.52 15.5132L19.53 15.5232C20.39 16.0232 21.51 15.5732 21.74 14.6132C21.91 13.8932 22 13.1432 22 12.3832C22 7.88321 19.02 4.06321 14.92 2.81321C13.97 2.52321 13 3.25321 13 4.25321ZM10.94 19.3032C7.95001 18.8732 5.52001 16.4432 5.08001 13.4632C4.54001 9.86321 6.74001 6.69321 9.91001 5.70321C10.55 5.51321 11 4.94321 11 4.27321V4.25321C11 3.25321 10.03 2.52321 9.07 2.81321C4.56 4.19321 1.41001 8.67321 2.09001 13.7732C2.68001 18.1532 6.22001 21.6932 10.6 22.2832C13.74 22.7032 16.64 21.6732 18.73 19.7532C19.47 19.0732 19.34 17.8632 18.47 17.3632C17.89 17.0232 17.17 17.1332 16.67 17.5832C15.2 18.9232 13.16 19.6332 10.94 19.3032Z"
        fill={colorCode}
      />
    </svg>
  )
}
