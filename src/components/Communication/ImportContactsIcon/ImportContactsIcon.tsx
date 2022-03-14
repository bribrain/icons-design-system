import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IImportContactsIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function ImportContactsIcon({ size = 24, rotate = 0, color = "grey-100" }: IImportContactsIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.5 4.88318C15.55 4.88318 13.45 5.28318 12 6.38318C10.55 5.28318 8.45 4.88318 6.5 4.88318C5.05 4.88318 3.51 5.10318 2.22 5.67318C1.49 6.00318 1 6.71318 1 7.52318V18.8032C1 20.1032 2.22 21.0632 3.48 20.7432C4.46 20.4932 5.5 20.3832 6.5 20.3832C8.06 20.3832 9.72 20.6432 11.06 21.3032C11.66 21.6032 12.34 21.6032 12.93 21.3032C14.27 20.6332 15.93 20.3832 17.49 20.3832C18.49 20.3832 19.53 20.4932 20.51 20.7432C21.77 21.0732 22.99 20.1132 22.99 18.8032V7.52318C22.99 6.71318 22.5 6.00318 21.77 5.67318C20.49 5.10318 18.95 4.88318 17.5 4.88318ZM21 17.6132C21 18.2432 20.42 18.7032 19.8 18.5932C19.05 18.4532 18.27 18.3932 17.5 18.3932C15.8 18.3932 13.35 19.0432 12 19.8932V8.38318C13.35 7.53318 15.8 6.88318 17.5 6.88318C18.42 6.88318 19.33 6.97318 20.2 7.16318C20.66 7.26318 21 7.67318 21 8.14318V17.6132Z"
        fill={colorCode}
      />
    </svg>
  )
}
