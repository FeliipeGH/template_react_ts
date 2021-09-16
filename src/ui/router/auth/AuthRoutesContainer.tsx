import React from 'react';
import {Redirect, Route} from "react-router";
import {RouteContainerInterface} from "../interfaces/RouteContainerInterface";
import {RouteConstants} from "../constants/RouteConstants";

export const AuthRoutesContainer = ({component: Component, isAuthenticated, ...rest}: RouteContainerInterface) => {
    // check if component is not null
    if (!Component) return null;
    return (
        <Route {...rest} render={props => !isAuthenticated ? <Component {...props}/> :
            <Redirect to={RouteConstants.DASHBOARD_MAIN}/>}/>
    );
};