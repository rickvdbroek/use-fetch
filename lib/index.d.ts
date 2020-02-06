interface IState {
    data: any;
    error: any;
    loading: boolean;
}
declare const useFetch: (url: string, resolver?: "arrayBuffer" | "blob" | "formData" | "json" | "text" | undefined, options?: RequestInit | undefined) => IState;
export { useFetch };
//# sourceMappingURL=index.d.ts.map