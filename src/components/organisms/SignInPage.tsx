import { Grid2, Typography } from "@mui/material";
import React from "react";
import styles from "../../styles/SignInPage.module.css";
import TextField from "../atoms/TextField";
import CustomButton from "../atoms/CustomButton";

export default function SignInPage() {
  return (
    <Grid2 container p={5} justifyContent={"center"}>
      <Grid2 size={12} className={styles.title}>
        Login
      </Grid2>
      <Grid2 size={12} className={styles.subTitle}>
        Welcome back to ECOMMERCE
      </Grid2>
      <Grid2 size={12} className={styles.description}>
        The next gen business marketplace
      </Grid2>
      <form style={{ width: "100%" }}>
        <TextField label="Email" value="" />
        <TextField type="password" label="Password" value="" />
        <Grid2 size={12} pt={2} pb={4} borderBottom={"1px solid #C1C1C1"}>
          <CustomButton type="submit">Login</CustomButton>
        </Grid2>
      </form>
      <Typography className={styles.signUpLink}>
        Don’t have an Account? <a href="/sign-up">SIGN UP</a>
      </Typography>
    </Grid2>
  );
}
