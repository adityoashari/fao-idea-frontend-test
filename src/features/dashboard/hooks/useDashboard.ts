import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { fetchPosts, fetchUsers } from "../services/api";
import { TPost } from "../types/post";
import { TUser } from "../types/user";

export const useUsers = (
  options?: Omit<UseQueryOptions<TUser[], Error>, "queryKey" | "queryFn">
) => {
  //   const setPostError = useBoundedStore((state) => state.setPostError);

  return useQuery<TUser[], Error>({
    queryKey: ["users"],
    queryFn: fetchUsers,
    // onError: (error) => setPostError(error.message),
    ...options,
  });
};

export const usePosts = (
  options?: Omit<UseQueryOptions<TPost[], Error>, "queryKey" | "queryFn">
) => {
  //   const setUserError = useBoundedStore((state) => state.setUserError);

  return useQuery<TPost[], Error>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    // onError: (error) => setUserError(error.message),
    ...options,
  });
};
