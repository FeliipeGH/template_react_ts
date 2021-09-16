import React from 'react';
import {MaterialInput} from "../../../components/materialInput/MaterialInput";
import {makeStyles} from "@material-ui/core/styles";
import {loginStyles} from "../../login/styles/loginStyles";
import FaceIcon from '@material-ui/icons/Face';
import EmailIcon from '@material-ui/icons/Email';
import {RegisterControllerInterface} from "../interfaces/RegisterControllerInterface";
import {FIRST_REGISTER_STEP} from "../hooks/useRegisterController";
import {FirstStepNotice} from "../localComponents/FirstStepNotice";
import {anyValueRule, emailRule, passwordRule} from "../../../rules/globalRules";

// @ts-ignore
const useStyles = makeStyles(loginStyles);
export const FirstStepContent = ({handleChangeStep, controlFirstStep}: RegisterControllerInterface) => {
    const classes = useStyles();

    return (
        <form className={classes.form} onSubmit={(e) => handleChangeStep(FIRST_REGISTER_STEP, e)}>
            <MaterialInput
                title="Nombre completo"
                inputId="name"
                icon={FaceIcon}
                control={controlFirstStep}
                rules={{...anyValueRule("Ingresa tu nombre")}}
            />
            <MaterialInput
                title="Usuario"
                inputId="userName"
                control={controlFirstStep}
                rules={{...anyValueRule("Ingresa el usuario")}}
            />
            <MaterialInput
                title="Correo"
                inputId="email"
                icon={EmailIcon}
                control={controlFirstStep}
                rules={{...emailRule}}
            />
            <MaterialInput
                title="Contraseña" inputId="password"
                control={controlFirstStep} type="password"
                rules={{...passwordRule}}
            />
            <FirstStepNotice/>
        </form>
    );
};