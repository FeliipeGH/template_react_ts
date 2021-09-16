import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {loginStyles} from "./styles/loginStyles";
import {useForm} from "react-hook-form";
import {MaterialInput} from "../../components/materialInput/MaterialInput";
import {LoginModel} from "../../../core/models/auth/LoginModel";
import {anyValueRule, passwordRule} from "../../rules/globalRules";
import {LoginNotice} from "./localComponents/LoginNotice";
import {useDispatch} from "react-redux";
import {makeLogin} from "./services/loginService";
// @ts-ignore
const useStyles = makeStyles(loginStyles);

export const LoginPage = () => {
    const {handleSubmit, control} = useForm();
    const classes = useStyles();
    const dispatch = useDispatch();

    const onSubmit = async (data: LoginModel) => {
        await makeLogin(data, dispatch);
    };

    return (
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <MaterialInput
                title="Usuario"
                inputId="userName"
                control={control}
                rules={{...anyValueRule("Ingresa el usuario")}}
            />
            <MaterialInput
                title="Contraseña" inputId="password"
                control={control} type="password"
                rules={{...passwordRule}}
            />
            <LoginNotice/>
        </form>
    );
};