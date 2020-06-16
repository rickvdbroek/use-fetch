import { IState, Action } from "types/index";

export const reducer = (state: IState, action: Action) => {
  switch (action.type) {
    case 'START_CALL':
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