import { Grid2 } from "@mui/material";
import React, { SyntheticEvent, useEffect, useRef } from "react";
import { OtpFieldProps } from "../../types/propsType";
import { HandleChangeEvent } from "../../types/types";
import styles from "../../styles/Atoms.module.css";

export default function OtpField(props: OtpFieldProps) {
  const { label, error, value, onChange } = props;
  const firstInput = useRef<HTMLInputElement>(null);
  const nextInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    firstInput?.current!?.focus();
    const keys: { [key: string]: string } = {};
    for (let index = 1; index <= 8; index++) {
      keys["key" + index] = "";
    }
    onChange?.(keys);
  }, []);

  const inputFocus = (elmnt: SyntheticEvent) => {
    const target = elmnt.target as unknown as HandleChangeEvent;
    const e = elmnt as unknown as { key: string };
    if (e.key === "Delete" || e.key === "Backspace") {
      const next = target.tabIndex - 2;
      if (next > -1) {
        target.form.elements[next].focus();
      }
    } else {
      const next = target.tabIndex;
      if (next < 8) {
        target.form.elements[next].focus();
      }
    }
  };

  const handleChange = (e: SyntheticEvent) => {
    const target = e.target as unknown as HandleChangeEvent;
    const otp = { ...value };
    otp["key" + target.tabIndex] = target.value;
    onChange?.(otp);
  };

  const inputs: Array<any> = [];

  const renderInputs = () => {
    for (let index = 0; index < 8; index++) {
      inputs.push(
        <input
          type="text"
          key={index}
          ref={index === 0 ? firstInput : nextInput}
          tabIndex={index + 1}
          onKeyUp={(e: SyntheticEvent) => inputFocus(e)}
          className={styles.otpInput}
          value={value["key" + (index + 1)]}
          onChange={(e) => handleChange(e)}
          maxLength={1}
        />
      );
    }
    return inputs;
  };

  return (
    <Grid2 size={12} className={styles.inputField}>
      <label>{label}</label>
      <Grid2 display="flex" justifyContent="space-between" pt={1} pb={5}>
        {renderInputs().map((item: any) => item)}
      </Grid2>
      {error && <div className={styles.error}>{error}</div>}
    </Grid2>
  );
}
