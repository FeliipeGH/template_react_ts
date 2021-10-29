import {LoginModel, LoginResponse} from "../models/auth/LoginModel";

export interface LoginRepository {
    requestLogin: (login: LoginModel) => Promise<LoginResponse>;
}