import {LoginResponse} from "../../../core/models/auth/LoginModel";

export type LoginAction = { type: 'login', payload: LoginState } | { type: 'signOut' };

export interface LoginState extends LoginResponse {
    expiration: number | null,
}