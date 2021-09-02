import React from 'react';
import {Box, Button, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {loginStyles} from "../../login/styles/loginStyles";

// @ts-ignore
const useStyles = makeStyles(loginStyles);
export const SecondStepNotice = (changeEmail: any) => {
    const classes = useStyles();
    return (
        <>
            <Box display="flex" justifyContent="center" className={classes.submitButton}>
                <Button type="submit" color="primary" variant="contained">
                    Completar
                </Button>
            </Box>
            <Typography variant="body2" align="center">
                ¿Correo incorrecto?
                <Button size="small" color="secondary" onClick={changeEmail}>
                    Corregir
                </Button>
            </Typography>
        </>
    );
};