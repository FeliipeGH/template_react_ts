import React from 'react';
import {Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {dashboardStyles} from "./styles/dashboardStyles";

//@ts-ignore
const useStyles = makeStyles(dashboardStyles);
export const DashboardContent = () => {
    const classes = useStyles();

    return (
        <Box className={classes.wrapper}>

        </Box>
    );
};