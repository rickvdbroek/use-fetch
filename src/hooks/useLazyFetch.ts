import { useCallback, useReducer } from 'react';
import { IState } from 'types/index';
import { reducer } from 'reducers/index';

export const useLazyFetch = (url: string, resolver: keyof Omit<Body, 'body' | 'bodyUsed'>, options?: RequestInit): [IState, () => void] => {
  const [state, dispatch] = useReducer(reducer, { data: null, error: null, loading: false });

  const fetchData = useCallback(async () => {
    dispatch({ type: 'START_CALL' });

    try {
      const res = await fetch(url, options);
      const resolvedData = await res[resolver]();
      dispatch({ type: 'SET_SUCCESS', payload: resolvedData });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error });
    }
  }, []);


  return [state, fetchData];
};