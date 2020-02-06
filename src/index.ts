import { useEffect, useReducer } from 'react';

type Action =
  | { type: 'START_SEARCH' }
  | { type: 'SET_SUCCESS', payload: { data: any } }
  | { type: 'SET_ERROR', payload: { error: any } };

interface IState {
  data: any;
  error: any;
  loading: boolean;
}

const reducer = (state: IState, action: Action) => {
  switch (action.type) {
    case 'START_SEARCH':
      return {
        ...state,
        error: '',
        loading: true,
      };
    case 'SET_SUCCESS':
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return { ...state };
  }
};

const useFetch = (url: string, resolver?: keyof Omit<Body, 'body' | 'bodyUsed'>, options?: RequestInit): IState => {
  const [state, dispatch] = useReducer(reducer, { data: null, error: null, loading: false });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'START_SEARCH' });

      try {
        const res = await fetch(url, options);
        const resolvedData = await res[resolver || 'json']();
        dispatch({ type: 'SET_SUCCESS', payload: resolvedData });
      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: error });
      }
    };

    fetchData();
  }, [options, resolver, url]);
  
  return state;
};

export { useFetch };