import * as React from "react"
import { Color } from "../../../types/color"
import { colorDatas } from "../../../datas/color"

export interface ILinkOffIconProps {
  size?: number
  rotate?: number
  color?: Color
}

export default function LinkOffIcon({ size = 24, rotate = 0, color = "grey-100" }: ILinkOffIconProps) {
  const colorCode = colorDatas[color]
  return (
    <svg width={size} height={size} transform={`rotate(${rotate})`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.94 11.6133C21.57 9.14326 19.32 7.38326 16.82 7.38326H13.95C13.43 7.38326 13 7.81326 13 8.33326C13 8.85326 13.43 9.28326 13.95 9.28326H16.85C18.45 9.28326 19.8899 10.4233 20.07 12.0133C20.24 13.4433 19.43 14.7033 18.2199 15.2333L19.62 16.6333C21.25 15.6133 22.26 13.7233 21.94 11.6133ZM4.11995 3.94326C3.72995 3.55326 3.09995 3.55326 2.70995 3.94326C2.31995 4.33326 2.31995 4.96326 2.70995 5.35326L5.10995 7.75326C3.16995 8.55326 1.83995 10.5233 2.01995 12.7933C2.22995 15.4333 4.58995 17.3833 7.22995 17.3833H10.05C10.57 17.3833 11 16.9533 11 16.4333C11 15.9133 10.57 15.4833 10.05 15.4833H7.15995C5.52995 15.4833 4.05995 14.2933 3.90995 12.6633C3.75995 10.9433 5.01995 9.49326 6.65995 9.31326L8.75995 11.4133C8.32995 11.5033 7.99995 11.8733 7.99995 12.3333V12.4333C7.99995 12.9533 8.42995 13.3833 8.94995 13.3833H10.7299L13 15.6533V17.3833H14.7299L18.03 20.6833C18.42 21.0733 19.05 21.0733 19.44 20.6833C19.83 20.2933 19.83 19.6633 19.44 19.2733L4.11995 3.94326ZM16 12.3333C16 11.8133 15.57 11.3833 15.05 11.3833H14.39L15.88 12.8733C15.95 12.7433 16 12.5933 16 12.4333V12.3333Z"
        fill={colorCode}
      />
    </svg>
  )
}