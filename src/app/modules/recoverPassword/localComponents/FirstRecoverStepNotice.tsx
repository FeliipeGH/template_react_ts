import React from 'react';

import {makeStyles} from "@material-ui/core/styles";
import {loginStyles} from "../../login/styles/loginStyles";
import {Box, Button, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import {RouteConstants} from "../../../router/constants/RouteConstants";
// @ts-ignore
const useStyles = makeStyles(loginStyles);
export const FirstRecoverStepNotice = () => {
    const classes = useStyles();
    return (
        <>
            <Box display="flex" justifyContent="center" className={classes.submitButton}>
                <Button type="submit" color="primary" variant="contained">
                    Continuar
                </Button>
            </Box>
            <Typography variant="body2" align="center">
                ¿Recuerdas tu cuenta?
                <Button size="small" color="secondary" component={Link} to={RouteConstants.LOGIN_PAGE}>
                    Iniciar sesión
                </Button>
            </Typography>
            <Typography variant="body2" align="center">
                ¿No tienes cuenta?
                <Button size="small" color="secondary" component={Link} to={RouteConstants.REGISTER_PAGE}>
                    Registrate
                </Button>
            </Typography>
        </>
    );
};