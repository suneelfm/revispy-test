import {
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  MouseEventHandler,
  ReactNode,
} from "react";

export interface IconProps {
  name: string;
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement>;
}

export interface TextFieldProps {
  label: string;
  value: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  error?: string;
  type?: HTMLInputTypeAttribute;
}

export interface CustomButtonProps {
  children: ReactNode;
  type?: "submit" | "button" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export interface OtpFieldProps {
  label: string;
  error?: string;
  onChange?: (e: Record<string, string>) => void;
  value: Record<string, string>;
}
