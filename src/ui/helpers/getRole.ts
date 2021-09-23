import {Role} from "../../core/models/auth/LoginModel";

const ROLE_ADMIN = "ROLE_ADMIN";
const ROLE_USER = "ROLE_USER";
const ROLE_GUARDIAN = "ROLE_GUARDIAN";


export const getRoleName = (rolList: Array<Role> | null | undefined) => {
    if (rolList) {
        if (rolList.find((e) => e.authority === ROLE_ADMIN)) return "Administrador";
        if (rolList.find((e) => e.authority === ROLE_USER)) return "Usuario";
        if (rolList.find((e) => e.authority === ROLE_GUARDIAN)) return "Guardian";
    }
    return "";
};