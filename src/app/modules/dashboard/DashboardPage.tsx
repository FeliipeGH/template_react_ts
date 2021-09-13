import React from 'react';
import {Box, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {dashboardContainerStyles} from "./styles/dashboardContainerStyles";
import {DashboardItem} from "./localComponents/DashboardItem";
import AssignmentIcon from "@material-ui/icons/Assignment";

// @ts-ignore
const useStyles = makeStyles(dashboardContainerStyles);
export const DashboardPage = () => {
    const classes = useStyles();

    return (
        <Box className={classes.content}>
            <Grid container spacing={4}>
                <DashboardItem url={"/algo"}
                               title="CRUD" subTitle="Administrar crud"
                               icon={AssignmentIcon}
                />
            </Grid>
        </Box>
    );
};
