import React, { useState } from "react";
import CustomButton from "../atoms/CustomButton";
import { Grid2, Typography } from "@mui/material";
import styles from "../../styles/SignUpPage.module.css";
import TextField from "../atoms/TextField";
import OtpField from "../atoms/OtpField";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [isVerificationSection, setIsVerificationSection] = useState(false);
  return (
    <Grid2 container p={5} justifyContent={"center"}>
      <Grid2 size={12} className={styles.title}>
        {isVerificationSection ? "Verify your email" : "Create your account"}
      </Grid2>
      {isVerificationSection && (
        <Typography className={styles.description}>
          Enter the 8 digit code you have received on {email}
        </Typography>
      )}
      <form style={{ width: "100%" }}>
        {isVerificationSection ? (
          <OtpField label="Code" value={{}} />
        ) : (
          <>
            <TextField label="Name" value="" error="sdf" />
            <TextField label="Email" value="" />
            <TextField type="password" label="Password" value="" />
          </>
        )}
        <Grid2 size={12} py={2}>
          <CustomButton
            type="submit"
            onClick={() => setIsVerificationSection(true)}
          >
            {isVerificationSection ? "Verify" : "Create Account"}
          </CustomButton>
        </Grid2>
      </form>
      {!isVerificationSection && (
        <Typography className={styles.loginLink}>
          Have an Account? <a href="/sign-in">LOGIN</a>
        </Typography>
      )}
    </Grid2>
  );
}
