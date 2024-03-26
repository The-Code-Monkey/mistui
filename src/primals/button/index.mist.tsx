// Generated by MistCSS, do not modify
import "./index.mist.css";

import type { JSX, ReactNode } from "react";

type ButtonProps = JSX.IntrinsicElements["button"] &
  Readonly<{
    children?: ReactNode;
    danger?: boolean;
    size?: "lg" | "sm";
  }>;

export const Button = ({ children, danger, size, ...props }: ButtonProps) => (
  <button {...props} className="button" data-danger={danger} data-size={size}>
    {children}
  </button>
);
