import React from "react";

export interface UseFetchProps<T> {
  fetchFn: () => Promise<T>;
  errorMessage?: string;
  errorCallback?: () => void;
}

const useFetch = <T,>({ fetchFn, errorMessage, errorCallback }: UseFetchProps<T>) => {
  const [data, setData] = React.useState<T | undefined>(undefined);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  const fetch = React.useCallback(async () => {
    try {
      setIsError(false);
      setIsLoading(true);

      const response = await fetchFn();
      setData(response);
    } catch (e) {
      setIsError(true);

      if (errorMessage) {
        window.alert(errorMessage);
      }
      if (errorCallback) {
        errorCallback();
      }
    } finally {
      setIsLoading(false);
    }
  }, [fetchFn, errorMessage, errorCallback]);

  React.useEffect(() => {
    fetch();
  }, [fetch]);

  return {
    data,
    isLoading,
    isError,
  };
};

export default useFetch;
