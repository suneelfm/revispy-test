import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from "@tanstack/react-query";
import axiosInstance from "./axiosInstance";
import { AxiosError, AxiosResponse } from "axios";

type Query = UseQueryResult<AxiosResponse<any, any>, AxiosError>;
type Mutation = UseMutationResult<
  AxiosResponse<any, any>,
  AxiosError,
  {
    _id: string;
    isInterested: boolean;
  },
  unknown
>;
export const useCategory = (page: number): Query => {
  const query = useQuery({
    queryKey: ["categories", page],
    queryFn: () => axiosInstance.get(`/category?page=${page}&limit=6`),
  });
  return query as Query;
};

export const useSaveInterest = (): Mutation => {
  const mutation = useMutation({
    mutationFn: (payload: { _id: string; isInterested: boolean }) =>
      axiosInstance.put("/category", payload),
  });
  return mutation as Mutation;
};
