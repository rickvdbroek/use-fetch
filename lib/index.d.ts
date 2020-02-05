interface IState {
    data: any;
    error: any;
    loading: boolean;
}
declare const useFetch: (url: string, resolver: "text" | "blob" | "json" | "arrayBuffer" | "formData", options?: RequestInit | undefined) => IState;
export { useFetch };
//# sourceMappingURL=index.d.ts.map