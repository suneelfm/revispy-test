import React from "react";
import CustomButton from "../atoms/CustomButton";
import { Grid2, Typography } from "@mui/material";
import styles from "../../styles/SignUpPage.module.css";
import TextField from "../atoms/TextField";

export default function SignUpPage() {
  return (
    <Grid2 container p={5} justifyContent={"center"}>
      <Grid2 size={12} className={styles.title}>
        Create your account
      </Grid2>
      <TextField label="Name" value="" error="sdf" />
      <TextField label="Email" value="" />
      <TextField label="Password" value="" />
      <Grid2 size={12} py={2}>
        <CustomButton>Create Account</CustomButton>
      </Grid2>
      <Typography className={styles.loginLink}>
        Have an Account? <a href="/sign-in">LOGIN</a>
      </Typography>
    </Grid2>
  );
}
