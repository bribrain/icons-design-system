import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface ILowPriorityIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function LowPriorityIcon({ size = 24, rotate = 0, color = "grey-100" }: ILowPriorityIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.0001 5.3833H21.0001C21.5501 5.3833 22.0001 5.8333 22.0001 6.3833C22.0001 6.9333 21.5501 7.3833 21.0001 7.3833H15.0001C14.4501 7.3833 14.0001 6.9333 14.0001 6.3833C14.0001 5.8333 14.4501 5.3833 15.0001 5.3833ZM15.0001 10.8833H21.0001C21.5501 10.8833 22.0001 11.3333 22.0001 11.8833C22.0001 12.4333 21.5501 12.8833 21.0001 12.8833H15.0001C14.4501 12.8833 14.0001 12.4333 14.0001 11.8833C14.0001 11.3333 14.4501 10.8833 15.0001 10.8833ZM15.0001 16.3833H21.0001C21.5501 16.3833 22.0001 16.8333 22.0001 17.3833C22.0001 17.9333 21.5501 18.3833 21.0001 18.3833H15.0001C14.4501 18.3833 14.0001 17.9333 14.0001 17.3833C14.0001 16.8333 14.4501 16.3833 15.0001 16.3833ZM9.85006 19.5333L11.6401 17.7433C11.8401 17.5433 11.8401 17.2333 11.6401 17.0333L9.85006 15.2433C9.54006 14.9233 9.00006 15.1433 9.00006 15.5933V19.1833C9.00006 19.6233 9.54006 19.8433 9.85006 19.5333ZM9.00006 16.3833H8.70006C6.35006 16.3833 4.25006 14.6733 4.02006 12.3333C3.76006 9.6533 5.87006 7.3833 8.50006 7.3833H11.0001C11.5501 7.3833 12.0001 6.9333 12.0001 6.3833C12.0001 5.8333 11.5501 5.3833 11.0001 5.3833H8.50006C4.64006 5.3833 1.54006 8.7833 2.06006 12.7433C2.48006 16.0233 5.43006 18.3833 8.73006 18.3833H9.00006"
        fill={colorCode}
      />
    </svg>
  )
}
