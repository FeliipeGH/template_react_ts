import React from 'react';
import {Box, Divider} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {profileStyles} from "../styles/profileStyles";


// @ts-ignore
const useStyles = makeStyles(profileStyles);
export const ProfileDivider = () => {
    const classes = useStyles();
    return (
        <Box className={classes.dividerContainer}>
            <Box className={classes.divider}>
                <Divider/>
            </Box>
        </Box>
    );
};