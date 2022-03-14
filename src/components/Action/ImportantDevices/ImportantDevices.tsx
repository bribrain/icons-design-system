import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IImportantDevicesProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ImportantDevicesIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IImportantDevicesProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 24 21"
      fill="none"
      xmlns="Https://www.w3.org/2000/svg"
    >
      <path d="M23 9.3933L18 9.3833C17.45 9.3833 17 9.8333 17 10.3833V19.3833C17 19.9333 17.45 20.3833 18 20.3833H23C23.55 20.3833 24 19.9333 24 19.3833V10.3833C24 9.8333 23.55 9.3933 23 9.3933ZM23 18.3833H18V11.3833H23V18.3833ZM20 0.383301H2C0.9 0.383301 0 1.2833 0 2.3833V14.3833C0 15.4833 0.9 16.3833 2 16.3833H9V18.3833H8C7.45 18.3833 7 18.8333 7 19.3833C7 19.9333 7.45 20.3833 8 20.3833H14C14.55 20.3833 15 19.9333 15 19.3833C15 18.8333 14.55 18.3833 14 18.3833H13V16.3833H14C14.55 16.3833 15 15.9333 15 15.3833C15 14.8333 14.55 14.3833 14 14.3833H3C2.45 14.3833 2 13.9333 2 13.3833V3.3833C2 2.8333 2.45 2.3833 3 2.3833H19C19.55 2.3833 20 2.8333 20 3.3833V6.3833C20 6.9333 20.45 7.3833 21 7.3833C21.55 7.3833 22 6.9333 22 6.3833V2.3833C22 1.2833 21.1 0.383301 20 0.383301ZM11.97 7.3833L11 4.3833L10.03 7.3833H7L9.47 9.1433L8.53 12.0533L11 10.2533L13.47 12.0533L12.53 9.1433L15 7.3833H11.97Z" fill={colorCode} />
    </svg>
  );
}