import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {loginStyles} from "../../login/styles/loginStyles";
import {MaterialInput} from "../../../components/MaterialInput/MaterialInput";
import FaceIcon from "@material-ui/icons/Face";
import {useForm} from "react-hook-form";
import {Box, Button, Typography} from "@material-ui/core";
import {FIRST_STEP} from "../hooks/useRegisterController";
import {RegisterInterface} from "../interfaces/RegisterInterface";

// @ts-ignore
const useStyles = makeStyles(loginStyles);
export const SecondStepContent = ({handleChangeStep}: RegisterInterface) => {
    const classes = useStyles();
    const {handleSubmit, control} = useForm();

    const handleCorrectEmail = () => {
        handleChangeStep(FIRST_STEP);
    };

    return (
        <form className={classes.form}>
            <Box style={{
                marginTop: "-0.5rem",
            }}>
                <Typography variant="body2" align="center">
                    Ingresa el correo enviado a
                </Typography>
            </Box>
            <Typography variant="body2" align="center">
                <Box fontWeight="500" component="b">
                    fguadarramaherrera@gmail.com
                </Box>
            </Typography>
            <Box style={{
                marginTop: "2rem",
            }}>
                <MaterialInput
                    title="Código"
                    inputId="code"
                    control={control}
                    icon={FaceIcon}
                    rules={{
                        required: {
                            value: true,
                            message: "Ingresa su nombre"
                        },
                    }}
                />
                <Box display="flex" justifyContent="center" className={classes.submitButton}>
                    <Button type="button" color="primary" variant="contained">
                        Completar
                    </Button>
                </Box>
                <Typography variant="body2" align="center">
                    ¿Correo incorrecto?
                    <Button size="small" color="secondary"
                            onClick={handleCorrectEmail}>
                        Corregir
                    </Button>
                </Typography>
            </Box>
        </form>
    );
};