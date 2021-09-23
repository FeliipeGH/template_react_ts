import {RouteProps} from "react-router-dom";
import {RouteComponentProps, StaticContext} from "react-router";
import React from "react";

export interface RouteContainerInterface extends RouteProps {
    isAuthenticated: boolean,
}

export type ComponentsRouteProps =
    JSX.IntrinsicAttributes
    & RouteComponentProps<any, StaticContext, unknown>
    & { children?: React.ReactNode; };