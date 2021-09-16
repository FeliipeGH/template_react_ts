import {LoginModel} from "../../../../core/models/auth/LoginModel";
import {
    closeAlert,
    ERROR_TITLE,
    GENERAL_ERROR_TEXT,
    showGenericAlert,
    showLoadingAlert
} from "../../../components/alerts/Alerts";
import {requestLogin} from "../../../../core/repositories/loginRepository";
import {Dispatch} from "redux";
import {HttpErrors} from "../../../../core/constants/HttpErrors";
import {doLogin} from "../../../../store/modules/login/loginActions";
import {LoginState} from "../../../../store/modules/login/LoginTypes";
import SecureLS from "secure-ls";

const TIME_EXPIRATION_MS = 23 * 60 * 60 * 1000;
const LOGIN_DATA = 'LoginData';

export const makeLogin = async (login: LoginModel, dispatch: Dispatch<any>) => {
    showLoadingAlert();
    try {
        const data = await requestLogin(login) as LoginState;
        const token = `Bearer ${data.token}`;
        const userData = {...data, expiration: getTimeExpiration(), token};
        saveUserDataInLocalStorage(userData);
        dispatch(doLogin(userData));
        closeAlert();
    } catch (e) {
        closeAlert();
        const {message} = e as Error;
        if (message === HttpErrors.INCORRECT_CREDENTIALS) {
            await showGenericAlert("¡Credenciales incorrectas!", ERROR_TITLE, "error");
        } else {
            await showGenericAlert(GENERAL_ERROR_TEXT, ERROR_TITLE, "error").then();
        }
    }
};

const getTimeExpiration = (): number => {
    const date = new Date();
    return date.getTime() + TIME_EXPIRATION_MS;
};

const saveUserDataInLocalStorage = (userData: LoginState) => {
    const secureStorage = new SecureLS({encodingType: 'aes'});
    secureStorage.set(LOGIN_DATA, JSON.stringify(userData));
};

export const removeUserDataFromLocalStorage = async () => {
    const secureStorage = new SecureLS({encodingType: 'aes'});
    await secureStorage.removeAll();
};

export const getUserDataFromLocalStorage = (): string => {
    const secureStorage = new SecureLS({encodingType: 'aes'});
    return secureStorage.get(LOGIN_DATA);
};