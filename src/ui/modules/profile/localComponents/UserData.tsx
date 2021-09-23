import React from 'react';
import {Box, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {profileStyles} from "../styles/profileStyles";
import {ProfileElement} from "./ProfileElement";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store/mainStore";

// @ts-ignore
const useStyles = makeStyles(profileStyles);
export const UserData = () => {
    const {email, userName, name} = useSelector((state: RootState) => state.loginReducer);

    const classes = useStyles();
    return (
        <Box>
            <Typography className={classes.userName}>
                Datos de usuario
            </Typography>
            <Box className={classes.dataContainer}>
                <Box className={classes.contentData}>
                    <ProfileElement title="Nombre" value={name ?? ""}/>
                    <ProfileElement title="Correo" value={email ?? ""}/>
                    <ProfileElement title="Usuario" value={userName ?? ""}/>
                    <ProfileElement title="Contraseña" value="*******"/>
                </Box>
            </Box>
        </Box>
    );
};

