import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {loginStyles} from "../../login/styles/loginStyles";
import {MaterialInput} from "../../../components/materialInput/MaterialInput";
import CodeIcon from '@material-ui/icons/Code';
import {Box} from "@material-ui/core";
import {SECOND_REGISTER_STEP} from "../hooks/useRegisterController";
import {RegisterControllerInterface} from "../interfaces/RegisterControllerInterface";
import {SecondStepNotice} from "../localComponents/SecondStepNotice";
import {anyValueRule} from "../../../rules/globalRules";
import {EmailCodeHeader} from "../../../components/authContainer/extras/EmailCodeHeader";

// @ts-ignore
const useStyles = makeStyles(loginStyles);
export const SecondStepContent = ({
                                      handleChangeStep,
                                      controlSecondStep,
                                      getEmail,
                                      changeEmail
                                  }: RegisterControllerInterface) => {
    const classes = useStyles();

    return (
        <form className={classes.form} onSubmit={(e) => handleChangeStep(SECOND_REGISTER_STEP, e)}>
            <EmailCodeHeader email={getEmail()}/>
            <Box style={{
                marginTop: "2rem",
            }}>
                <MaterialInput
                    title="Código"
                    inputId="code"
                    control={controlSecondStep}
                    icon={CodeIcon}
                    rules={{...anyValueRule("Ingresa el código")}}
                />
                <SecondStepNotice changeEmail={changeEmail}/>
            </Box>
        </form>
    );
};