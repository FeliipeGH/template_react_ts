import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {RouteConstants} from "./constants/RouteConstants";
import {Redirect, Switch} from "react-router";
import {AuthRoutesContainer} from "./auth/AuthRoutesContainer";
import {DashboardRoutesContainer} from "./dashboard/DashboardRoutesContainer";
import {DashboardRoutes} from "./dashboard/DashboardRoutes";
import {AuthRoutes} from "./auth/AuthRoutes";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <AuthRoutesContainer path={RouteConstants.AUTH_PAGE} component={AuthRoutes}/>
                <DashboardRoutesContainer path={RouteConstants.DASHBOARD_ROOT} component={DashboardRoutes}/>
                <Redirect to={RouteConstants.AUTH_PAGE}/>
            </Switch>
        </BrowserRouter>
    );
};