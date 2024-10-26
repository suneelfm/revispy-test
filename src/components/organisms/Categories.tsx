import { Checkbox, FormControlLabel, Grid2, Pagination } from "@mui/material";
import React from "react";
import styles from "../../styles/Categories.module.css";
import Icon from "../atoms/Icon";

export default function Categories() {
  const interests = [
    { id: "shoes", label: "Shoes" },
    { id: "makeup", label: "Makeup" },
  ];
  return (
    <Grid2 container p={5} justifyContent={"center"}>
      <Grid2 size={12} className={styles.title}>
        Please mark your interests!
      </Grid2>
      <Grid2 size={12} className={styles.subTitle}>
        We will keep you notified.
      </Grid2>
      <Grid2 size={12} className={styles.interestsTitle}>
        My saved interests!
      </Grid2>
      {interests.map(({ id, label }) => (
        <FormControlLabel
          key={id}
          label={label}
          sx={{
            paddingLeft: "16px",
            width: "100%",
            "&.MuiFormControlLabel-root .MuiFormControlLabel-label": {
              fontSize: "16px !important",
            },
          }}
          control={
            <Checkbox
              checkedIcon={
                <span className={`${styles.checkIcon} ${styles.checkedIcon}`}>
                  <Icon name="check" className={styles.tickIcon} />
                </span>
              }
              icon={
                <span
                  className={`${styles.checkIcon} ${styles.unCheckedIcon}`}
                ></span>
              }
            />
          }
        />
      ))}
      <Pagination
        className={styles.pagination}
        count={10}
        showFirstButton
        showLastButton
      />
    </Grid2>
  );
}
