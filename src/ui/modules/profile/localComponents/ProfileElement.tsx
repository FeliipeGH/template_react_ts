import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {profileStyles} from "../styles/profileStyles";

export interface ProfileElementInterface {
    title: string,
    value: string,
}

// @ts-ignore
const useStyles = makeStyles(profileStyles);
export const ProfileElement = ({title, value}: ProfileElementInterface) => {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs={6}>
                <Typography className={classes.title}>
                    {title}:
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography className={classes.value}>
                    {value}
                </Typography>
            </Grid>
        </Grid>
    );
};
