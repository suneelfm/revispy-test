import React, { ReactElement } from "react";
import { IconProps } from "../../types/propsType";

export default function Icon(props: IconProps) {
  const { className, onClick, name } = props;
  const ICON: Record<string, ReactElement> = {
    search: (
      <svg
        onClick={onClick}
        className={`icon ${className}`}
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="SearchIcon"
        aria-label="fontSize large"
      >
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"></path>
      </svg>
    ),
    cart: (
      <svg
        onClick={onClick}
        className={`icon ${className}`}
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="ShoppingCartOutlinedIcon"
        aria-label="fontSize large"
      >
        <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2zM6.16 6h12.15l-2.76 5H8.53zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2m10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2"></path>
      </svg>
    ),
    menu: (
      <svg
        onClick={onClick}
        className={`icon ${className}`}
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="MenuOutlinedIcon"
        aria-label="fontSize large"
      >
        <path d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"></path>
      </svg>
    ),
    leftArrow: (
      <svg
        onClick={onClick}
        className={`icon ${className}`}
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="KeyboardArrowLeftOutlinedIcon"
        aria-label="fontSize large"
      >
        <path d="M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6z"></path>
      </svg>
    ),
    rightArrow: (
      <svg
        onClick={onClick}
        className={`icon ${className}`}
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="KeyboardArrowRightOutlinedIcon"
        aria-label="fontSize large"
      >
        <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z"></path>
      </svg>
    ),
    check: (
      <svg
        onClick={onClick}
        className={`icon ${className}`}
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="CheckIcon"
        aria-label="fontSize large"
      >
        <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
      </svg>
    ),
  };
  return ICON[name];
}
