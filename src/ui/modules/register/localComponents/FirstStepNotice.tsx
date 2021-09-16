import React from 'react';

import {makeStyles} from "@material-ui/core/styles";
import {loginStyles} from "../../login/styles/loginStyles";
import {Box, Button, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import {RouteConstants} from "../../../router/constants/RouteConstants";
// @ts-ignore
const useStyles = makeStyles(loginStyles);
export const FirstStepNotice = () => {
    const classes = useStyles();
    return (
        <>
            <Box display="flex" justifyContent="center" className={classes.submitButton}>
                <Button type="submit" color="primary" variant="contained" className={classes.button}>
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
                <Button size="small" color="secondary" component={Link} to={RouteConstants.RECOVER_PASSWORD}>
                    Recuperala
                </Button>
            </Typography>
        </>
    );
};