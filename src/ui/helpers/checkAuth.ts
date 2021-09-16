import {getUserDataFromLocalStorage} from "../modules/login/services/loginService";
import {LoginState} from "../../store/modules/login/LoginTypes";

export const checkAuth = (): boolean => {
    let isAuth = true;
    try {
        const stringData = getUserDataFromLocalStorage();
        if (stringData === '') return false;
        const userData = JSON.parse(stringData) as LoginState;
        const {authorities, expiration, token, userName} = userData;
        if (token === null || expiration === null
            || authorities === null || userName === null) return false;
        const currentDate = new Date();
        try {
            const expireDate = new Date(expiration);
            isAuth = expireDate > currentDate;
            if (!isAuth) {
                localStorage.clear();
            }
        } catch (e) {
            localStorage.clear();
            isAuth = false;
        }
    } catch (e) {
        localStorage.clear();
        isAuth = false;
    }
    return isAuth;
};