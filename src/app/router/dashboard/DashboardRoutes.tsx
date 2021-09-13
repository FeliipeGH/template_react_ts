import React from 'react';
import {Redirect, Route, Switch} from "react-router";
import {RouteConstants} from "../constants/RouteConstants";
import {DashboardPage} from "../../modules/dashboard/DashboardPage";
import {DashboardContainer} from "../../components/dashboard/DashboardContainer";
import {dashboardModulesList} from "./helpers/dashboardModulesList";

export const DashboardRoutes = () => {
    return (
        <DashboardContainer moduleList={dashboardModulesList}>
            <Switch>
                <Route exact path={RouteConstants.DASHBOARD_MAIN} component={DashboardPage}/>
                <Redirect to={RouteConstants.DASHBOARD_MAIN}/>
            </Switch>
        </DashboardContainer>
    );
};