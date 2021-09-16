export interface ResultData {
    list: Array<any>,
    resolved: boolean,
}

export type RequestTokenFunction = (token: string | null) => Promise<ResultData>;