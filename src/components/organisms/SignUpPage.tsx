import React, { useEffect, useState } from "react";
import CustomButton from "../atoms/CustomButton";
import { CircularProgress, Grid2, Typography } from "@mui/material";
import styles from "../../styles/SignUpPage.module.css";
import TextField from "../atoms/TextField";
import OtpField from "../atoms/OtpField";
import { useSignUp, useVerifyEmail } from "../../serviceQuery/authQuery";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState({});
  const [error, setError] = useState({
    name: "",
    emailId: "",
    password: "",
    otp: "",
  });
  const [isVerificationSection, setIsVerificationSection] = useState(false);

  const navigate = useNavigate();

  const {
    mutate: signUp,
    data: otpData,
    isPending: signUpPending,
    isSuccess,
  } = useSignUp();
  const {
    mutate: verifyEmail,
    data,
    isPending,
    isSuccess: isVerified,
  } = useVerifyEmail();

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("revisPyOtpToken", otpData?.data?.otpToken);
      setIsVerificationSection(true);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isVerified) {
      localStorage.removeItem("revisPyOtpToken");
      navigate("/sign-in", { replace: true });
    }
  }, [isVerified]);

  return (
    <Grid2 container p={5} justifyContent={"center"}>
      <Grid2 size={12} className={styles.title}>
        {isVerificationSection ? "Verify your email" : "Create your account"}
      </Grid2>
      {isVerificationSection && (
        <Typography className={styles.description}>
          Enter the 8 digit code you have received on {otpData?.data?.emailId}
        </Typography>
      )}
      <form
        style={{ width: "100%" }}
        onSubmit={(e) => {
          e.preventDefault();
          const errorCopy = { ...error };
          if (isVerificationSection) {
            const otpString = Object.values(otp).join("");
            const otpToken = localStorage.getItem("revisPyOtpToken") ?? "";
            if (!(otpString.trim().length === 8)) {
              errorCopy.name = "OTP is required.";
            } else {
              errorCopy.name = "";
              verifyEmail({ otp: otpString, otpToken });
            }
          } else {
            if (!name.trim()) {
              errorCopy.name = "Name is required.";
            } else if (!/^[a-zA-Z0-9]+[a-zA-Z0-9 _-]+$/.test(name)) {
              errorCopy.name =
                "Name should contained only alphanumerics with _-";
            } else {
              errorCopy.name = "";
            }
            if (!emailId.trim()) {
              errorCopy.emailId = "Email is required.";
            } else if (
              !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(emailId)
            ) {
              errorCopy.emailId = "Enter valid Email.";
            } else {
              errorCopy.emailId = "";
            }
            if (!password.trim()) {
              errorCopy.password = "Password is required.";
            } else if (
              !/^(?=.*[A-Z])(?=.*[!@#$&*%^-_.,'";:`])(?=.*[0-9])(?=.*[a-z]).{6,}$/.test(
                password
              )
            ) {
              errorCopy.password =
                "Password should be of length 8 with at least 1 Uppercase, 1 lowercase, 1 digit, 1 special character.";
            } else {
              errorCopy.password = "";
            }
            setError(errorCopy);

            if (!errorCopy.emailId && !errorCopy.name && !errorCopy.password) {
              signUp({ name, emailId, password });
            }
          }
        }}
      >
        {isVerificationSection ? (
          <OtpField
            label="Code"
            value={otp}
            onChange={setOtp}
            error={error.otp}
          />
        ) : (
          <>
            <TextField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={error.name}
            />
            <TextField
              label="Email"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              error={error.emailId}
            />
            <TextField
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={error.password}
            />
          </>
        )}
        <Grid2 size={12} py={2}>
          <CustomButton type="submit" disabled={signUpPending || isPending}>
            {(signUpPending || isPending) && (
              <CircularProgress className="circularProgress" />
            )}
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
