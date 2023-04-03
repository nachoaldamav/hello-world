import { useState } from 'react';
import { useGreetings } from '../../providers/greetings-provider';

export interface DataState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

export const PATH = 'api/hello';

export const useHelloWorld = (): [DataState<string>, () => void] => {
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const { axiosInstance } = useGreetings();

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(PATH);
      setData(response.data);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  return [{ data, loading, error }, fetchData];
}

export default useHelloWorld;