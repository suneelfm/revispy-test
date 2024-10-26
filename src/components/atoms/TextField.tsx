import { Grid2 } from "@mui/material";
import React, { useState } from "react";
import styles from "../../styles/Atoms.module.css";
import { TextFieldProps } from "../../types/propsType";

export default function TextField(props: TextFieldProps) {
  const { label, value, onChange, error, type: defaultType } = props;
  const isPassword = defaultType === "password";
  const [showPassword, setShowPassword] = useState(false);
  const type = isPassword ? (showPassword ? "text" : "password") : defaultType;
  return (
    <Grid2 size={12} className={styles.inputField}>
      <label>{label}</label>
      <input
        type={type}
        placeholder="Enter"
        value={value}
        onChange={onChange}
      />
      {isPassword && (
        <span onClick={() => setShowPassword(!showPassword)}>Show</span>
      )}
      {error && <div>{error}</div>}
    </Grid2>
  );
}
