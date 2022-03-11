import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IReportIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function ReportIcon({ size = 24, rotate = 0, color = "grey-100" }: IReportIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.32 3.3833H8.68C8.42 3.3833 8.16 3.4933 7.98 3.6733L3.29 8.3633C3.11 8.5433 3 8.8033 3 9.0633V15.6933C3 15.9633 3.11 16.2133 3.29 16.4033L7.97 21.0833C8.16 21.2733 8.42 21.3833 8.68 21.3833H15.31C15.58 21.3833 15.83 21.2733 16.02 21.0933L20.7 16.4133C20.89 16.2233 20.99 15.9733 20.99 15.7033V9.0633C20.99 8.7933 20.88 8.5433 20.7 8.3533L16.02 3.6733C15.84 3.4933 15.58 3.3833 15.32 3.3833ZM12 17.6833C11.28 17.6833 10.7 17.1033 10.7 16.3833C10.7 15.6633 11.28 15.0833 12 15.0833C12.72 15.0833 13.3 15.6633 13.3 16.3833C13.3 17.1033 12.72 17.6833 12 17.6833ZM12 13.3833C11.45 13.3833 11 12.9333 11 12.3833V8.3833C11 7.8333 11.45 7.3833 12 7.3833C12.55 7.3833 13 7.8333 13 8.3833V12.3833C13 12.9333 12.55 13.3833 12 13.3833Z"
        fill={colorCode}
      />
    </svg>
  )
}
