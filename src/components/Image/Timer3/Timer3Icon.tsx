import * as React from "react";
import { colorDatas } from "../../../datas/color";
import { Color } from "../../../types/color";

export interface ITimer3IconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function Timer3Icon({
  size = 24,
  rotate = 0,
  color = "grey-100",
}: ITimer3IconProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 25"
      style={{
        transform: `rotate(${rotate}deg)`,
        WebkitTransform: `rotate(${rotate}deg)`,
      }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.61 13.3532C11.45 13.1132 11.25 12.8932 10.99 12.7032C10.74 12.5132 10.43 12.3532 10.06 12.2232C10.36 12.0832 10.63 11.9232 10.86 11.7232C11.09 11.5232 11.28 11.3132 11.43 11.0832C11.58 10.8532 11.7 10.6232 11.77 10.3732C11.85 10.1332 11.88 9.88317 11.88 9.64317C11.88 9.09317 11.79 8.60317 11.6 8.18317C11.42 7.76317 11.16 7.41317 10.82 7.12317C10.49 6.84317 10.09 6.62317 9.62 6.48317C9.17 6.35317 8.65 6.28317 8.09 6.28317C7.54 6.28317 7.03 6.36317 6.57 6.52317C6.1 6.69317 5.7 6.92317 5.37 7.21317C5.04 7.50317 4.77 7.84317 4.59 8.24317C4.39 8.63317 4.3 9.07317 4.3 9.53317H6.28C6.28 9.27317 6.33 9.04317 6.42 8.84317C6.51 8.64317 6.64 8.46317 6.8 8.32317C6.97 8.18317 7.16 8.07317 7.38 7.99317C7.6 7.91317 7.84 7.87317 8.11 7.87317C8.72 7.87317 9.17 8.03317 9.47 8.34317C9.77 8.65317 9.91 9.09317 9.91 9.66317C9.91 9.93317 9.87 10.1832 9.79 10.4032C9.71 10.6232 9.58 10.8132 9.41 10.9732C9.24 11.1332 9.03 11.2532 8.78 11.3432C8.53 11.4332 8.23 11.4732 7.89 11.4732H6.72V13.0432H7.9C8.24 13.0432 8.54 13.0832 8.81 13.1532C9.08 13.2332 9.31 13.3432 9.5 13.5032C9.69 13.6632 9.84 13.8632 9.94 14.1132C10.04 14.3532 10.1 14.6532 10.1 14.9832C10.1 15.6032 9.92 16.0732 9.57 16.4032C9.22 16.7332 8.73 16.8932 8.12 16.8932C7.83 16.8932 7.56 16.8532 7.32 16.7632C7.08 16.6832 6.88 16.5632 6.71 16.4032C6.54 16.2432 6.41 16.0632 6.32 15.8432C6.23 15.6232 6.18 15.3832 6.18 15.1232H4.19C4.19 15.6732 4.3 16.1532 4.51 16.5732C4.72 16.9932 5.01 17.3432 5.37 17.6232C5.73 17.9032 6.14 18.1132 6.61 18.2532C7.08 18.3932 7.57 18.4632 8.09 18.4632C8.66 18.4632 9.18 18.3832 9.67 18.2332C10.16 18.0832 10.58 17.8532 10.93 17.5532C11.29 17.2532 11.57 16.8932 11.77 16.4532C11.97 16.0232 12.07 15.5232 12.07 14.9732C12.07 14.6832 12.03 14.3932 11.96 14.1132C11.88 13.8632 11.77 13.6032 11.61 13.3532ZM20.87 14.7532C20.73 14.4732 20.52 14.2232 20.24 14.0132C19.96 13.8032 19.63 13.6232 19.23 13.4832C18.83 13.3432 18.38 13.2132 17.88 13.1032C17.53 13.0332 17.24 12.9532 17.01 12.8732C16.78 12.7932 16.6 12.7132 16.46 12.6232C16.32 12.5332 16.23 12.4332 16.18 12.3232C16.13 12.2132 16.1 12.0832 16.1 11.9332C16.1 11.7832 16.13 11.6532 16.19 11.5232C16.25 11.3932 16.34 11.2732 16.46 11.1832C16.58 11.0832 16.73 11.0032 16.91 10.9432C17.09 10.8832 17.31 10.8532 17.55 10.8532C17.8 10.8532 18.02 10.8932 18.21 10.9632C18.4 11.0332 18.56 11.1332 18.69 11.2532C18.82 11.3732 18.91 11.5132 18.98 11.6732C19.04 11.8332 19.08 11.9932 19.08 12.1632H21.03C21.03 11.7732 20.95 11.4132 20.79 11.0732C20.63 10.7332 20.4 10.4432 20.1 10.1932C19.8 9.94317 19.44 9.75317 19.01 9.60317C18.58 9.45317 18.09 9.38317 17.55 9.38317C17.04 9.38317 16.57 9.45317 16.16 9.59317C15.75 9.73317 15.39 9.92317 15.1 10.1632C14.81 10.4032 14.59 10.6832 14.43 11.0032C14.27 11.3232 14.2 11.6532 14.2 12.0132C14.2 12.3732 14.28 12.6932 14.43 12.9732C14.58 13.2532 14.8 13.4932 15.07 13.7032C15.34 13.9132 15.67 14.0832 16.05 14.2332C16.43 14.3732 16.86 14.4932 17.32 14.5932C17.71 14.6732 18.03 14.7632 18.27 14.8532C18.51 14.9432 18.7 15.0432 18.84 15.1432C18.97 15.2432 19.06 15.3632 19.11 15.4832C19.16 15.6032 19.18 15.7332 19.18 15.8732C19.18 16.1932 19.05 16.4432 18.78 16.6432C18.51 16.8432 18.12 16.9332 17.61 16.9332C17.39 16.9332 17.18 16.9132 16.97 16.8532C16.76 16.8032 16.57 16.7232 16.41 16.6132C16.24 16.5032 16.11 16.3532 16 16.1732C15.89 15.9932 15.83 15.7632 15.82 15.5032H13.93C13.93 15.8632 14.01 16.2132 14.17 16.5532C14.33 16.8932 14.56 17.2032 14.87 17.4832C15.18 17.7532 15.56 17.9732 16.02 18.1432C16.48 18.3132 17 18.3932 17.6 18.3932C18.13 18.3932 18.61 18.3332 19.04 18.2032C19.47 18.0732 19.84 17.8932 20.15 17.6632C20.46 17.4332 20.69 17.1532 20.86 16.8332C21.03 16.5132 21.11 16.1632 21.11 15.7732C21.09 15.3732 21.02 15.0332 20.87 14.7532Z"
        fill={colorCode}
      />
    </svg>
  );
}