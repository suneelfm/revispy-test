import { Button } from "@mui/material";
import React from "react";
import { CustomButtonProps } from "../../types/propsType";
import styles from "../../styles/Atoms.module.css";

export default function CustomButton(props: CustomButtonProps) {
  const { children, onClick, type, disabled, ...rest } = props;
  return (
    <Button
      className={styles.button}
      disabled={disabled}
      onClick={onClick}
      type={type}
      {...rest}
    >
      {children}
    </Button>
  );
}
