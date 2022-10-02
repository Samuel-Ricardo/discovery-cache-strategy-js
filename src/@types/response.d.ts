export interface IResponse<D>{
    status: number;
    message: string;
    error: boolean;
    data: D
}