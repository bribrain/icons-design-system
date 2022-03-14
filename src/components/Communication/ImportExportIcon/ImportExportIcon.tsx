import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IImportExportIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function ImportExportIcon({ size = 24, rotate = 0, color = "grey-100" }: IImportExportIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.65003 3.7332L5.86003 6.5232C5.54003 6.8332 5.76003 7.3732 6.21003 7.3732H8.00003V13.3832C8.00003 13.9332 8.45003 14.3832 9.00003 14.3832C9.55003 14.3832 10 13.9332 10 13.3832V7.3732H11.79C12.24 7.3732 12.46 6.8332 12.14 6.5232L9.35003 3.7332C9.16003 3.5432 8.84003 3.5432 8.65003 3.7332ZM16 17.3932V11.3832C16 10.8332 15.55 10.3832 15 10.3832C14.45 10.3832 14 10.8332 14 11.3832V17.3932H12.21C11.76 17.3932 11.54 17.9332 11.86 18.2432L14.65 21.0232C14.85 21.2132 15.16 21.2132 15.36 21.0232L18.15 18.2432C18.47 17.9332 18.24 17.3932 17.8 17.3932H16Z"
        fill={colorCode}
      />
    </svg>
  )
}
