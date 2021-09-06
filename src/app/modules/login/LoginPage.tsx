import React from 'react';
import {AuthContainer} from "../../components/AuthContainer/AuthContainer";
import {makeStyles} from "@material-ui/core/styles";
import {loginStyles} from "./styles/loginStyles";
import {useForm} from "react-hook-form";
import {MaterialInput} from "../../components/MaterialInput/MaterialInput";
import {LoginModel} from "../../../core/models/LoginModel";
import {anyValueRule, passwordRule} from "../../rules/globalRules";
import {LoginNotice} from "./localComponents/LoginNotice";

// @ts-ignore
const useStyles = makeStyles(loginStyles);

export const LoginPage = () => {
    const {handleSubmit, control} = useForm();
    const classes = useStyles();

    const onSubmit = (data: LoginModel) => {
        console.log(data)
    };

    return (
        <AuthContainer title="Iniciar sesión">
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
        </AuthContainer>
    );
};