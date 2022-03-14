import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface ICallMergeIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function CallMergeIcon({ size = 24, rotate = 0, color = "grey-100" }: ICallMergeIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.7001 20.0831C18.0901 19.6931 18.0901 19.0631 17.7001 18.6731L15.0001 15.9731L13.5901 17.3831L16.2901 20.0831C16.6801 20.4731 17.3201 20.4731 17.7001 20.0831ZM8.71006 8.38314H11.0001V13.9731L6.29006 18.6731C5.90006 19.0631 5.90006 19.6931 6.29006 20.0831C6.68006 20.4731 7.31006 20.4731 7.70006 20.0831L13.0001 14.7831V8.38314H15.2901C15.7401 8.38314 15.9601 7.84314 15.6401 7.53314L12.3501 4.24314C12.1501 4.04314 11.8401 4.04314 11.6401 4.24314L8.35006 7.53314C8.04006 7.84314 8.26006 8.38314 8.71006 8.38314Z"
        fill={colorCode}
      />
    </svg>
  )
}
