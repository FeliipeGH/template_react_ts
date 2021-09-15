import React from 'react';
import {Box, Button, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import {RouteConstants} from "../../../router/constants/RouteConstants";
import {makeStyles} from "@material-ui/core/styles";
import {loginStyles} from "../styles/loginStyles";

// @ts-ignore
const useStyles = makeStyles(loginStyles);
export const LoginNotice = () => {
    const classes = useStyles();
    return (
        <>
            <Box display="flex" justifyContent="center" className={classes.submitButton}>
                <Button type="submit" color="primary" variant="contained" className={classes.button}>
                    Ingresar
                </Button>
            </Box>
            <Typography variant="body2" align="center">
                ¿No tienes cuenta?
                <Button size="small" color="secondary" component={Link} to={RouteConstants.REGISTER_PAGE}>
                    Registrate
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
