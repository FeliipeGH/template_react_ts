import React from 'react';
import {Redirect, Route, Switch} from "react-router";
import {RouteConstants} from "../constants/RouteConstants";
import {DashboardPage} from "../../modules/dashboard/DashboardPage";
import {DashboardContainer} from "../../components/dashboard/DashboardContainer";
import {dashboardModulesList} from "./helpers/dashboardModulesList";
import {BusinessListPage} from "../../modules/business/BusinessListPage";
import {BusinessCreateUpdatePage} from "../../modules/business/BusinessCrateUpdatePage";
import {ProfilePage} from "../../modules/profile/ProfilePage";

export const DashboardRoutes = () => {
    return (
        <DashboardContainer moduleList={dashboardModulesList}>
            <Switch>
                <Route exact path={RouteConstants.DASHBOARD_MAIN} component={DashboardPage}/>
                <Route exact path={RouteConstants.BUSINESS_LIST} component={BusinessListPage}/>
                <Route exact path={RouteConstants.BUSINESS_CREATE} component={BusinessCreateUpdatePage}/>
                <Route exact path={RouteConstants.PROFILE} component={ProfilePage}/>
                <Redirect to={RouteConstants.DASHBOARD_MAIN}/>
            </Switch>
        </DashboardContainer>
    );
};