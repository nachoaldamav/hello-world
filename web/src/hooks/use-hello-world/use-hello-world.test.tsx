import type { ReactNode } from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { GreetingsProvider } from '../../providers/greetings-provider';
import {useHelloWorld, DataState} from './use-hello-world';


describe('use-hello-world', () => {
  const wrapper = ({ children }: { children: ReactNode }) => (
    <GreetingsProvider>{children}</GreetingsProvider>
  );

  it('returns the correct data', async () => {

    const { result, waitForNextUpdate } = renderHook(() => useHelloWorld(), {
      wrapper,
    });

    expect(result.current[0]).toEqual<DataState<string>>({
      data: null,
      loading: false,
      error: null,
    });

    act(() => {
      result.current[1]();
    });

    expect(result.current[0]).toEqual<DataState<string>>({
      data: null,
      loading: true,
      error: null,
    });

    await waitForNextUpdate();

    expect(result.current[0]).toEqual<DataState<string>>({
      data: 'Hello, World!',
      loading: false,
      error: null,
    });
  }
)});