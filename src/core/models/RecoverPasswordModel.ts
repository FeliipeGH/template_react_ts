export class RecoverPasswordModel {
    email = "";
    code = "";
    password = "";

    constructor(email = "", code = "", password = "") {
        this.email = email;
        this.code = code;
        this.password = password;
    }
}