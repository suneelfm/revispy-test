import { Grid2 } from "@mui/material";
import React from "react";
import styles from "../../styles/Atoms.module.css";
import { TextFieldProps } from "../../types/propsType";

export default function TextField(props: TextFieldProps) {
  const { label, value, onChange, error } = props;
  return (
    <Grid2 size={12} className={styles.inputField}>
      <label>{label}</label>
      <input placeholder="Enter" value={value} onChange={onChange} />
      {error && <div>{error}</div>}
    </Grid2>
  );
}
