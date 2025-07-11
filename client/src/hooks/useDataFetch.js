import { useState, useEffect, useCallback, useRef } from "react";

export default function useDataFetch({ initState, fetchFn, disableAutoFetch }) {
  const [data, setData] = useState(initState);
  const [isFetching, setIsFetching] = useState(!disableAutoFetch);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Use ref to store the latest fetchFn
  const fetchFnRef = useRef(fetchFn);
  fetchFnRef.current = fetchFn;

  const fetch = useCallback(async () => {
    try {
      setIsFetching(true);
      const response = await fetchFnRef.current();

      // Handle wrapped response format from backend interceptor
      const responseData = response.data;

      // Check if response is wrapped by the interceptor
      if (
        responseData &&
        typeof responseData === "object" &&
        "data" in responseData
      ) {
        // Response is wrapped, extract the actual data
        const actualData = responseData.data;

        if (Array.isArray(actualData)) {
          setData(actualData);
          setIsSuccess(true);
          setIsError(false);
        } else {
          setData(actualData);
          setIsSuccess(true);
          setIsError(false);
        }
      } else {
        // Direct response format (fallback)
        if (Array.isArray(responseData)) {
          setData(responseData);
          setIsSuccess(true);
          setIsError(false);
        } else {
          setData(responseData);
          setIsSuccess(true);
          setIsError(false);
        }
      }
    } catch (err) {
      setIsError(true);
      setErrorMessage(err.response?.data?.error || err.message);
    } finally {
      setIsFetching(false);
    }
  }, []); // Empty dependency array to prevent infinite loops

  useEffect(() => {
    if (!disableAutoFetch) fetch();
  }, [disableAutoFetch, fetch]);

  return {
    data,
    isFetching,
    isSuccess,
    isError,
    errorMessage,
    refetch: fetch,
  };
}
