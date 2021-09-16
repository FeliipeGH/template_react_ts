import React from 'react';
import {Grid} from "@material-ui/core";
import {DashboardItem} from "./localComponents/DashboardItem";
import AssignmentIcon from "@material-ui/icons/Assignment";
import {RouteConstants} from "../../router/constants/RouteConstants";

// @ts-ignore
//const useStyles = makeStyles(dashboardContainerStyles);
export const DashboardPage = () => {
    //const classes = useStyles();

    return (
        <Grid container spacing={4}>
            <DashboardItem url={RouteConstants.BUSINESS_LIST}
                           title="Negocios" subTitle="Administrar negocios"
                           icon={AssignmentIcon}
            />
        </Grid>
    );
};
