import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface IReportOffIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function ReportOffIcon({ size = 24, rotate = 0, color = "grey-100" }: IReportOffIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 7.38326C12.55 7.38326 13 7.83326 13 8.38326V9.71326L20.2 16.9133L20.71 16.4033C20.9 16.2133 21 15.9633 21 15.6933V9.06326C21 8.79326 20.89 8.54326 20.71 8.35326L16.03 3.67326C15.84 3.49326 15.58 3.38326 15.32 3.38326H8.68C8.42 3.38326 8.16 3.49326 7.98 3.67326L7.47 4.18326L11.16 7.87326C11.33 7.58326 11.64 7.38326 12 7.38326ZM2.41 1.96326L1 3.37326L4.64 7.01326L3.29 8.36326C3.11 8.54326 3 8.80326 3 9.06326V15.6933C3 15.9633 3.11 16.2133 3.29 16.4033L7.97 21.0833C8.16 21.2733 8.42 21.3833 8.68 21.3833H15.31C15.58 21.3833 15.83 21.2733 16.02 21.0933L17.37 19.7433L21.01 23.3833L22.42 21.9733L2.41 1.96326ZM12 17.6833C11.28 17.6833 10.7 17.1033 10.7 16.3833C10.7 15.6633 11.28 15.0833 12 15.0833C12.72 15.0833 13.3 15.6633 13.3 16.3833C13.3 17.1033 12.72 17.6833 12 17.6833Z"
        fill={colorCode}
      />
    </svg>
  )
}
