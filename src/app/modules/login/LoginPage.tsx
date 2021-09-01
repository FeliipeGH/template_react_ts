import React from 'react';
import {AuthContainer} from "../../components/AuthContainer/AuthContainer";
import {Box, Button, Card, Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {loginStyles} from "./styles/loginStyles";
import {useForm} from "react-hook-form";
import {MaterialInput} from "../../components/MaterialInput/MaterialInput";
import {LoginModel} from "../../../core/models/LoginModel";

// @ts-ignore
const useStyles = makeStyles(loginStyles);

export const LoginPage = () => {
    const {handleSubmit, control} = useForm();

    const classes = useStyles();

    const onSubmit = (data: LoginModel) => {
        console.log(data)
    };

    return (
        <AuthContainer>
            <Box className={classes.container}>
                <Grid container justifyContent="center">
                    <Grid item xs={12} sm={12} md={4}>
                        <Card>
                            <Typography variant="h5" align="center" className={classes.title}>
                                Iniciar sesión
                            </Typography>
                            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
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
                                    <Button type="submit" color="primary" variant="contained">
                                        Ingresar
                                    </Button>
                                </Box>
                                <Typography variant="body2" align="center">
                                    ¿No tienes cuenta?
                                    <Button size="small" color="secondary">
                                        Registrate
                                    </Button>
                                </Typography>
                                <Typography variant="body2" align="center">
                                    ¿Olvidaste tu cuenta?
                                    <Button size="small" color="secondary">
                                        Recuperala
                                    </Button>
                                </Typography>
                            </form>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </AuthContainer>
    );
};