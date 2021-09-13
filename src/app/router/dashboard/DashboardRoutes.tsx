import React from 'react';
import {Redirect, Route, Switch} from "react-router";
import {RouteConstants} from "../constants/RouteConstants";
import {DashboardPage} from "../../modules/dashboard/DashboardPage";

export const DashboardRoutes = () => {
    return (
        <Switch>
            <Route exact path={RouteConstants.DASHBOARD_MAIN} component={DashboardPage}/>
            <Redirect to={RouteConstants.DASHBOARD_MAIN}/>
        </Switch>
    );
};