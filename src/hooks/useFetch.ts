import { useEffect, useCallback, useReducer } from 'react';
import { IState } from '../types';
import { reducer } from 'reducers';

export const useFetch = (url: string, resolver: keyof Omit<Body, 'body' | 'bodyUsed'>, options?: RequestInit): IState => {
  const [state, dispatch] = useReducer(reducer, { data: null, error: null, loading: false });

  useEffect(() => {
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

    fetchData();
  }, [options, resolver, url]);

  return state;
};