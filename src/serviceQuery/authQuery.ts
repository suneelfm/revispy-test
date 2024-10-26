import { useMutation, UseMutationResult } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";
import { AxiosError, AxiosResponse } from "axios";

type Mutation = UseMutationResult<
  AxiosResponse<any, any>,
  AxiosError,
  {
    emailId: string;
    password: string;
  },
  unknown
>;
export const useSign = (): Mutation => {
  const mutation = useMutation({
    mutationFn: (payload: { emailId: string; password: string }) => {
      return axiosInstance.post("/auth/sign-in", payload);
    },
  });
  return mutation as Mutation;
};

export const useSignUp = () => {
  const mutation = useMutation({
    mutationFn: (payload: {
      name: string;
      emailId: string;
      password: string;
    }) => {
      return axiosInstance.post("/auth/sign-up", payload);
    },
  });
  return mutation;
};

export const useVerifyEmail = () => {
  const mutation = useMutation({
    mutationFn: (payload: { otp: string; otpToken: string }) => {
      return axiosInstance.put("/auth/verify", payload);
    },
  });
  return mutation;
};
