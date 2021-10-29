import {LoginModel, LoginResponse} from "../models/auth/LoginModel";
import {HttpErrors} from "../constants/HttpErrors";
import {GeneralConstants} from "../constants/GeneralConstants";
import {LoginRepository} from "../interfaces/LoginRepository";

export class LoginRepositoryImpl implements LoginRepository {

    async requestLogin(login: LoginModel): Promise<LoginResponse> {
        const response: Response = await fetch(`${GeneralConstants.BASE_URL}/auth/signIn`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(login)
        });
        if (response.status !== 200) {
            if (response.status === 401) {
                throw new Error(HttpErrors.INCORRECT_CREDENTIALS);
            } else {
                throw new Error(HttpErrors.SERVER_ERROR);
            }
        }
        return await response.json() as LoginResponse;
    }
}