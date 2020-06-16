export type Action =
  | { type: 'START_CALL' }
  | { type: 'SET_SUCCESS', payload: { data: any } }
  | { type: 'SET_ERROR', payload: { error: any } };

export interface IState {
  data: any;
  error: any;
  loading: boolean;
}