import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IApiProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ApiIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IApiProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 22 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 11.3833C11.44 11.9433 10.55 11.9433 9.99999 11.3933V11.3833C9.44999 10.8333 9.44999 9.94326 9.99999 9.39326V9.38326C10.55 8.83326 11.44 8.83326 11.99 9.38326H12C12.55 9.93326 12.55 10.8333 12 11.3833ZM11 4.38326L13.12 6.50326L15.62 4.00326L12.42 0.803262C11.64 0.0232617 10.37 0.0232617 9.58999 0.803262L6.38999 4.00326L8.88999 6.50326L11 4.38326ZM4.99999 10.3833L7.11999 8.26326L4.61999 5.76326L1.41999 8.96326C0.639991 9.74326 0.639991 11.0133 1.41999 11.7933L4.61999 14.9933L7.11999 12.4933L4.99999 10.3833ZM17 10.3833L14.88 12.5033L17.38 15.0033L20.58 11.8033C21.36 11.0233 21.36 9.75326 20.58 8.97326L17.38 5.77326L14.88 8.27326L17 10.3833ZM11 16.3833L8.87999 14.2633L6.37999 16.7633L9.57999 19.9633C10.36 20.7433 11.63 20.7433 12.41 19.9633L15.61 16.7633L13.11 14.2633L11 16.3833Z" fill={colorCode} />
    </svg>
  );
}