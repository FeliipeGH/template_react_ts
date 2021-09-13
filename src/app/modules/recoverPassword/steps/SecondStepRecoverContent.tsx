import React from 'react';
import {RecoverPasswordInterface} from "../interface/RecoverPasswordInterface";
import {makeStyles} from "@material-ui/core/styles";
import {loginStyles} from "../../login/styles/loginStyles";
import {SECOND_RECOVER_STEP} from "../hooks/useRecoverPasswordController";
import {EmailCodeHeader} from "../../../components/authContainer/extras/EmailCodeHeader";
import {Box} from "@material-ui/core";
import CodeIcon from "@material-ui/icons/Code";
import {anyValueRule} from "../../../rules/globalRules";
import {MaterialInput} from "../../../components/materialInput/MaterialInput";
import {SecondStepNotice} from "../../register/localComponents/SecondStepNotice";

// @ts-ignore
const useStyles = makeStyles(loginStyles);
export const SecondStepRecoverContent = ({
                                             handleChangeStep,
                                             getEmail,
                                             controlSecondStep,
                                             changeEmail
                                         }: RecoverPasswordInterface) => {
    const classes = useStyles();

    return (
        <form className={classes.form} onSubmit={(e) => handleChangeStep(SECOND_RECOVER_STEP, e)}>
            <EmailCodeHeader email={getEmail()}/>
            <Box>
                <MaterialInput
                    title="Código"
                    inputId="code"
                    control={controlSecondStep}
                    icon={CodeIcon}
                    rules={{...anyValueRule("Ingresa el código")}}
                />
                <MaterialInput
                    title="Nueva contraseña"
                    inputId="password"
                    type="password"
                    control={controlSecondStep}
                    rules={{...anyValueRule("Ingresa el código")}}
                />
                <SecondStepNotice changeEmail={changeEmail}/>
            </Box>
        </form>
    );
};