import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IPaymentProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function PaymentIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IPaymentProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 20 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18 0.383301H2C0.89 0.383301 0.00999999 1.2733 0.00999999 2.3833L0 14.3833C0 15.4933 0.89 16.3833 2 16.3833H18C19.11 16.3833 20 15.4933 20 14.3833V2.3833C20 1.2733 19.11 0.383301 18 0.383301ZM17 14.3833H3C2.45 14.3833 2 13.9333 2 13.3833V8.3833H18V13.3833C18 13.9333 17.55 14.3833 17 14.3833ZM18 4.3833H2V2.3833H18V4.3833Z" fill={colorCode} />
    </svg>
  );
}