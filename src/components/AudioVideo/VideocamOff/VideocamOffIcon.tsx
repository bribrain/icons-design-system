import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IVideocamOffIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function VideocamOffIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IVideocamOffIconProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 12.5833V7.29326C19 6.40326 17.92 5.95326 17.29 6.58326L15 8.88326V5.38326C15 4.83326 14.55 4.38326 14 4.38326H8.38998L17.3 13.2933C17.92 13.9233 19 13.4733 19 12.5833ZM0.70998 0.943257C0.31998 1.33326 0.31998 1.96326 0.70998 2.35326L2.72998 4.38326H1.99998C1.44998 4.38326 0.99998 4.83326 0.99998 5.38326V15.3833C0.99998 15.9333 1.44998 16.3833 1.99998 16.3833H14C14.21 16.3833 14.39 16.3033 14.55 16.2033L17.03 18.6833C17.42 19.0733 18.05 19.0733 18.44 18.6833C18.83 18.2933 18.83 17.6633 18.44 17.2733L2.11998 0.943257C1.72998 0.553257 1.09998 0.553257 0.70998 0.943257Z" fill={colorCode} />
    </svg>
  );
}