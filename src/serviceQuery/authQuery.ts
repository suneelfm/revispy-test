import { useMutation } from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";

export const useSign = () => {
  const mutation = useMutation({
    mutationFn: (payload: { emailId: string; password: string }) => {
      return axiosInstance.post("/auth/sign-in", payload);
    },
  });
  return mutation;
};
