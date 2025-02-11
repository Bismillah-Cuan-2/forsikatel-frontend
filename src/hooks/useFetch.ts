import { useState, useEffect } from "react";

interface UseFetchResult<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
}

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

interface UseFetchParams {
  endpoint: string;
  method?: HttpMethod;
  body?: string | Record<string, unknown>; 
  headers?: Record<string, string>;
}

const useFetch = <T>({
  endpoint,
  method = "GET",
  body,
  headers,
}: UseFetchParams): UseFetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(endpoint, {
          method,
          body: body ? (typeof body === "object" ? JSON.stringify(body) : body) : undefined, 
          headers: {
            "Content-Type": "application/json",
            ...(headers || {}),
          },
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const jsonData: T = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, method, JSON.stringify(body || {}), JSON.stringify(headers || {})]); // ✅ Ensure proper dependency handling

  return { data, error, loading };
};

export default useFetch;
