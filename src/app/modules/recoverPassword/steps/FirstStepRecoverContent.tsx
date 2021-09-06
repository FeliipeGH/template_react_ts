import React from 'react';
import {RecoverPasswordInterface} from "../interface/RecoverPasswordInterface";
import {makeStyles} from "@material-ui/core/styles";
import {loginStyles} from "../../login/styles/loginStyles";
import {FIRST_RECOVER_STEP} from "../hooks/useRecoverPasswordController";
import {emailRule} from "../../../rules/globalRules";
import {MaterialInput} from "../../../components/MaterialInput/MaterialInput";
import EmailIcon from "@material-ui/icons/Email";
import {Box, Typography} from "@material-ui/core";
import {FirstRecoverStepNotice} from "../localComponents/FirstRecoverStepNotice";

// @ts-ignore
const useStyles = makeStyles(loginStyles);
export const FirstStepRecoverContent = ({handleChangeStep, controlFirstStep}: RecoverPasswordInterface) => {
    const classes = useStyles();

    return (
        <form className={classes.form} onSubmit={(e) => handleChangeStep(FIRST_RECOVER_STEP, e)}>
            <Box style={{
                marginTop: "-1.5rem",
            }}>
                <Typography variant="subtitle1" align="center">
                    Ingresa tu correo
                </Typography>
            </Box>
            <MaterialInput
                title="Correo"
                inputId="email"
                icon={EmailIcon}
                control={controlFirstStep}
                rules={{...emailRule}}
            />
            <FirstRecoverStepNotice/>
        </form>
    );
};