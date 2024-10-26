import { Button } from "@mui/material";
import React from "react";
import { CustomButtonProps } from "../../types/propsType";
import styles from "../../styles/Atoms.module.css";

export default function CustomButton(props: CustomButtonProps) {
  const { children, onClick, type } = props;
  return (
    <Button className={styles.button} onClick={onClick} type={type}>
      {children}
    </Button>
  );
}
