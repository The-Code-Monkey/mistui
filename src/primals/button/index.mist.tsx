// Generated by MistCSS, do not modify
import "./index.mist.css";

import type { JSX, ReactNode } from "react";

type ButtonProps = JSX.IntrinsicElements["button"] &
  Readonly<{
    children?: ReactNode;
    size?: "lg" | "sm";
    variant?: "danger" | "info" | "success" | "warning";
  }>;

export const Button = ({ children, size, variant, ...props }: ButtonProps) => (
  <button {...props} className="button" data-size={size} data-variant={variant}>
    {children}
  </button>
);
