import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {RouteConstants} from "./constants/RouteConstants";
import {MainPage} from "../modules/main/MainPage";
import {LoginPage} from "../modules/login/LoginPage";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Route exact path={RouteConstants.MAIN_PAGE} component={MainPage}/>
            <Route exact path={RouteConstants.LOGIN_PAGE} component={LoginPage}/>
        </BrowserRouter>
    );
};