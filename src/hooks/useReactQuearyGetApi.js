import { useQuery } from "@tanstack/react-query";

const useReactQuearyGetApi = ({ queryFn, queryKey = [], options = {} }) => {
  return useQuery({
    queryKey,
    queryFn,
    enabled: typeof queryFn === "function", // avoid calling undefined
    ...options,
  });
};

export default useReactQuearyGetApi;
