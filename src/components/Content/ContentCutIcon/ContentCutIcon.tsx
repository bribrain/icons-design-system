import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IContentCutIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function ContentCutIcon({ size = 24, rotate = 0, color = "grey-100" }: IContentCutIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.63999 8.02334C9.92999 7.40334 10.06 6.69334 9.97999 5.93334C9.78999 4.20334 8.43999 2.73334 6.71999 2.44334C3.94999 1.96334 1.57999 4.33334 2.05999 7.09334C2.35999 8.81334 3.81999 10.1633 5.54999 10.3533C6.30999 10.4333 7.00999 10.3033 7.63999 10.0133L9.99999 12.3833L7.63999 14.7433C7.01999 14.4533 6.30999 14.3233 5.54999 14.4033C3.81999 14.5933 2.34999 15.9433 2.05999 17.6633C1.57999 20.4333 3.94999 22.7933 6.70999 22.3133C8.42999 22.0133 9.77999 20.5533 9.96999 18.8233C10.05 18.0633 9.91999 17.3633 9.62999 16.7333L12 14.3833L19.59 21.9733C20.48 22.8633 22 22.2333 22 20.9733V20.9633C22 20.5933 21.85 20.2333 21.59 19.9633L9.63999 8.02334ZM5.99999 8.38334C4.89999 8.38334 3.99999 7.49334 3.99999 6.38334C3.99999 5.27334 4.89999 4.38334 5.99999 4.38334C7.09999 4.38334 7.99999 5.27334 7.99999 6.38334C7.99999 7.49334 7.09999 8.38334 5.99999 8.38334ZM5.99999 20.3833C4.89999 20.3833 3.99999 19.4933 3.99999 18.3833C3.99999 17.2733 4.89999 16.3833 5.99999 16.3833C7.09999 16.3833 7.99999 17.2733 7.99999 18.3833C7.99999 19.4933 7.09999 20.3833 5.99999 20.3833ZM12 12.8833C11.72 12.8833 11.5 12.6633 11.5 12.3833C11.5 12.1033 11.72 11.8833 12 11.8833C12.28 11.8833 12.5 12.1033 12.5 12.3833C12.5 12.6633 12.28 12.8833 12 12.8833ZM19.59 2.79334L13 9.38334L15 11.3833L21.59 4.79334C21.85 4.53334 22 4.17334 22 3.79334V3.78334C22 2.53334 20.48 1.90334 19.59 2.79334Z"
        fill={colorCode}
      />
    </svg>
  )
}
