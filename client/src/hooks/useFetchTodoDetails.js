import API from "../services/APIService";
import useDataFetch from "./useDataFetch";
import { useParams } from "react-router-dom";

export default function useFetchTodoDetails() {
  const { id } = useParams();
  return useDataFetch({
    initState: null,
    fetchFn: () => API.get(`/todos/${id}`),
    disableAutoFetch: id === "new",
  });
}
