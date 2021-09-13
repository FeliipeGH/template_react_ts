import React from 'react';
import {RouteProps} from "react-router-dom";
import {Route} from "react-router";

export const AuthRoutesContainer = ({component: Component, ...rest}: RouteProps) => {
    // check if component is not null
    if (!Component) return null;
    return (
        <Route {...rest} render={props => <Component {...props}/>}/>
    );
};