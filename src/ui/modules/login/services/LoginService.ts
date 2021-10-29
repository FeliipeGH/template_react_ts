import {LoginRepository} from "../../../../core/interfaces/LoginRepository";
import {LoginModel} from "../../../../core/models/auth/LoginModel";
import {Dispatch} from "redux";
import {
    closeAlert,
    ERROR_TITLE,
    GENERAL_ERROR_TEXT,
    showGenericAlert,
    showLoadingAlert
} from "../../../components/alerts/Alerts";
import {getTimeExpiration, saveUserDataInLocalStorage} from "../../../helpers/checkAuth";
import {doLogin} from "../../../../store/modules/login/loginActions";
import {HttpErrors} from "../../../../core/constants/HttpErrors";

export class LoginService {

    loginRepository: LoginRepository;

    constructor(loginRepository: LoginRepository) {
        this.loginRepository = loginRepository;
    }

    async startLogin(login: LoginModel, dispatch: Dispatch<any>) {
        showLoadingAlert();
        try {
            const data = await this.loginRepository.requestLogin(login);
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
    }
}