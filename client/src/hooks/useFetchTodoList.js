import API from "../services/APIService";
import useDataFetch from "./useDataFetch";

export default function useFetchTodoList() {
  return useDataFetch({
    initState: [],
    fetchFn: () => API.get("/todos"),
  });
}
