import { IState } from 'types/index';
export declare const useLazyFetch: (url: string, resolver: keyof Omit<Body, 'body' | 'bodyUsed'>, options?: RequestInit | undefined) => [IState, () => void];
//# sourceMappingURL=useLazyFetch.d.ts.map