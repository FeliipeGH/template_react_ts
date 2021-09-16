import {RouteProps} from "react-router-dom";

export interface RouteContainerInterface extends RouteProps {
    isAuthenticated: boolean,
}