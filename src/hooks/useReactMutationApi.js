// useReactMutationApi.js
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useReactMutationApi = ({ mutationFn, onSuccess, onError }) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn,
    onSuccess: (data) => {
      if (onSuccess) onSuccess(data, queryClient);
    },
    onError: (err) => {
      if (onError) onError(err);
    },
  });
};

export default useReactMutationApi;
