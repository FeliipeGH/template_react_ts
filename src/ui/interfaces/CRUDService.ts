import {RequestListTokenFunction} from "./RequestFunction";
import {RequestDeleteFunction, RequestObjectFunction} from "./RequestObjectFunction";
import {CRUDRepository} from "../../core/interfaces/CRUDRepository";

export type SaveParams = {
    token: string,
    object: any,
    [otherOptions: string]: unknown;
}

export interface CRUDService {
    requestList: RequestListTokenFunction;
    save: (saveParams: SaveParams) => Promise<boolean | any>;
    getById: RequestObjectFunction;
    deleteById: RequestDeleteFunction;
    crudRepository: CRUDRepository;
}