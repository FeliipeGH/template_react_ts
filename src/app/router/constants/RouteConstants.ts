export class RouteConstants {
    static MAIN_PAGE: string = "/";
    static AUTH_PAGE: string = "/auth";
    static LOGIN_PAGE: string = `${this.AUTH_PAGE}/login`;
    static REGISTER_PAGE: string = `${this.AUTH_PAGE}/register`;
    static RECOVER_PASSWORD: string = `${this.AUTH_PAGE}/recover-password`;

    static DASHBOARD_ROOT: string = `/dashboard`;
    static DASHBOARD_MAIN: string = `${this.DASHBOARD_ROOT}/main`;

}