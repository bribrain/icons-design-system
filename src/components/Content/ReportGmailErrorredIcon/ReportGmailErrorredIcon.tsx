import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IReportGmailErrorredIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function ReportGmailErrorredIcon({ size = 24, rotate = 0, color = "black" }: IReportGmailErrorredIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.71 8.3633L16.03 3.6833C15.84 3.4933 15.58 3.3833 15.32 3.3833H8.68C8.42 3.3833 8.16 3.4933 7.98 3.6733L3.29 8.3633C3.11 8.5433 3 8.8033 3 9.0633V15.6933C3 15.9633 3.11 16.2133 3.29 16.4033L7.97 21.0833C8.16 21.2733 8.42 21.3833 8.68 21.3833H15.31C15.58 21.3833 15.83 21.2733 16.02 21.0933L20.7 16.4133C20.89 16.2233 20.99 15.9733 20.99 15.7033V9.0633C21 8.8033 20.89 8.5433 20.71 8.3633ZM19 15.2833L14.9 19.3833H9.1L5 15.2833V9.4833L9.1 5.3833H14.9L19 9.4833V15.2833Z"
        fill={colorCode}
      />
      <path d="M12 17.3833C12.5523 17.3833 13 16.9356 13 16.3833C13 15.831 12.5523 15.3833 12 15.3833C11.4477 15.3833 11 15.831 11 16.3833C11 16.9356 11.4477 17.3833 12 17.3833Z" fill={colorCode} />
      <path d="M12 7.3833C11.45 7.3833 11 7.8333 11 8.3833V13.3833C11 13.9333 11.45 14.3833 12 14.3833C12.55 14.3833 13 13.9333 13 13.3833V8.3833C13 7.8333 12.55 7.3833 12 7.3833Z" fill={colorCode} />
    </svg>
  )
}
