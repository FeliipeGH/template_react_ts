import {LoginModel, LoginResponse} from "../models/auth/LoginModel";
import axios, {AxiosError} from "axios";
import {HttpErrors} from "../constants/HttpErrors";
import {GeneralConstants} from "../constants/GeneralConstants";

export const requestLogin = async (login: LoginModel): Promise<LoginResponse> => {
    try {
        const response = await axios({
            url: `${GeneralConstants.BASE_URL}/auth/signIn`,
            method: 'POST',
            data: login
        });
        return response.data as LoginResponse;
    } catch (e) {
        const {response} = e as AxiosError;
        if (response) {
            if (response.status === 401) {
                throw new Error(HttpErrors.INCORRECT_CREDENTIALS);
            } else {
                throw new Error(HttpErrors.SERVER_ERROR);
            }
        } else {
            throw new Error(HttpErrors.SERVER_ERROR);
        }
    }
};