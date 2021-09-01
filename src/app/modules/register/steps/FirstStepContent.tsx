import React from 'react';
import {MaterialInput} from "../../../components/MaterialInput/MaterialInput";
import {Box, Button, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import {RouteConstants} from "../../../router/constants/RouteConstants";
import {makeStyles} from "@material-ui/core/styles";
import {loginStyles} from "../../login/styles/loginStyles";
import {useForm} from "react-hook-form";
import FaceIcon from '@material-ui/icons/Face';
import EmailIcon from '@material-ui/icons/Email';
import {RegisterInterface} from "../interfaces/RegisterInterface";
import {SECOND_STEP} from "../hooks/useRegisterController";

// @ts-ignore
const useStyles = makeStyles(loginStyles);
export const FirstStepContent = ({handleChangeStep}: RegisterInterface) => {
    const classes = useStyles();
    const {handleSubmit, control} = useForm();

    //todo change
    const onSubmit = (data: any) => {
        handleChangeStep(SECOND_STEP);
    };


    return (
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <MaterialInput
                title="Nombre completo"
                inputId="name"
                icon={FaceIcon}
                control={control}
                rules={{
                    required: {
                        value: true,
                        message: "Ingresa su nombre"
                    },
                }}
            />
            <MaterialInput
                title="Usuario"
                inputId="userName"
                control={control}
                rules={{
                    required: {
                        value: true,
                        message: "Ingresa el usuario"
                    },
                }}
            />
            <MaterialInput
                title="Correo"
                inputId="email"
                icon={EmailIcon}
                control={control}
                rules={{
                    required: {
                        value: true,
                        message: "Ingresa el correo"
                    },
                    pattern: {
                        value: /\S+@\S+\.\S+/i,
                        message: 'Ingresa un correo valido'
                    }
                }}
            />
            <MaterialInput
                title="Contraseña" inputId="password"
                control={control} type="password"
                rules={{
                    required: {
                        value: true,
                        message: "Ingrese la contraseña"
                    },
                    pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i,
                        message: 'Debe tener al menos un número, una letra minúscula, ' +
                            'una letra mayúscula y 8 caracteres'
                    },
                }}
            />
            <Box display="flex" justifyContent="center" className={classes.submitButton}>
                {/*<Button type="submit" color="primary" variant="contained">
                    Continuar
                </Button>*/}
                <Button type="button" color="primary" variant="contained"
                        onClick={() => {
                            handleChangeStep(SECOND_STEP);
                        }}
                >
                    Continuar
                </Button>
            </Box>
            <Typography variant="body2" align="center">
                ¿Ya tienes cuenta?
                <Button size="small" color="secondary" component={Link} to={RouteConstants.LOGIN_PAGE}>
                    Iniciar sesión
                </Button>
            </Typography>
            <Typography variant="body2" align="center">
                ¿Olvidaste tu cuenta?
                <Button size="small" color="secondary">
                    Recuperala
                </Button>
            </Typography>
        </form>
    );
};