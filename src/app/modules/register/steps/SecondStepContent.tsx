import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {loginStyles} from "../../login/styles/loginStyles";
import {MaterialInput} from "../../../components/MaterialInput/MaterialInput";
import FaceIcon from "@material-ui/icons/Face";
import {Box, Typography} from "@material-ui/core";
import {SECOND_STEP} from "../hooks/useRegisterController";
import {RegisterControllerInterface} from "../interfaces/RegisterControllerInterface";
import {SecondStepNotice} from "../localComponents/SecondStepNotice";
import {anyValueRule} from "../../../rules/globalRules";

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
        <form className={classes.form} onSubmit={(e) => handleChangeStep(SECOND_STEP, e)}>
            <Box style={{
                marginTop: "-0.5rem",
            }}>
                <Typography variant="body2" align="center">
                    Ingresa el correo enviado a
                </Typography>
            </Box>
            <Typography variant="body2" align="center">
                <Box fontWeight="500" component="b">
                    {getEmail()}
                </Box>
            </Typography>
            <Box style={{
                marginTop: "2rem",
            }}>
                <MaterialInput
                    title="Código"
                    inputId="code"
                    control={controlSecondStep}
                    icon={FaceIcon}
                    rules={{...anyValueRule("Ingresa el código")}}
                />
                <SecondStepNotice changeEmail={changeEmail}/>
            </Box>
        </form>
    );
};