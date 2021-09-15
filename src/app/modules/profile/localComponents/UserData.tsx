import React from 'react';
import {Box, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {profileStyles} from "../styles/profileStyles";
import {ProfileElement} from "./ProfileElement";

// @ts-ignore
const useStyles = makeStyles(profileStyles);
export const UserData = () => {
    const classes = useStyles();
    return (
        <Box>
            <Typography className={classes.userName}>
                Datos de usuario
            </Typography>
            <Box className={classes.dataContainer}>
                <Box className={classes.contentData}>
                    <ProfileElement title="Nombre" value="Felipe Guadarrama Herrera"/>
                    <ProfileElement title="Correo" value="fguadarramaherrera@gmail.com"/>
                    <ProfileElement title="Usuario" value="Felipe"/>
                    <ProfileElement title="Contraseña" value="*******"/>
                </Box>
            </Box>
        </Box>
    );
};

