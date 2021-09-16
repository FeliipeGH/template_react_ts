import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {profileStyles} from "../styles/profileStyles";
import {Box, Grid, Typography} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

// @ts-ignore
const useStyles = makeStyles(profileStyles);
export const ProfileHeader = () => {
    const classes = useStyles();
    return (
        <Grid container justifyContent="center">
            <Grid item>
                <Box className={classes.profileContentIcon}>
                    <AccountCircleIcon className={classes.profileIcon}/>
                </Box>
                <Box>
                    <Typography className={classes.userName}>
                        Felipe
                    </Typography>
                    <Typography className={classes.rolName}>
                        Administrador
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
};
