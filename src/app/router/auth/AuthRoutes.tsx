import React from 'react';
import {AuthContainer} from "../../components/AuthContainer/AuthContainer";
import {Redirect, Route, Switch} from "react-router";
import {RouteConstants} from "../constants/RouteConstants";
import {LoginPage} from "../../modules/login/LoginPage";
import {RegisterPage} from "../../modules/register/RegisterPage";
import {RecoverPasswordPage} from "../../modules/recoverPassword/RecoverPasswordPage";

export const AuthRoutes = () => {
    return (
        <AuthContainer>
            <Switch>
                <Route exact path={RouteConstants.LOGIN_PAGE} component={LoginPage}/>
                <Route exact path={RouteConstants.REGISTER_PAGE} component={RegisterPage}/>
                <Route exact path={RouteConstants.RECOVER_PASSWORD} component={RecoverPasswordPage}/>
                <Redirect to={RouteConstants.LOGIN_PAGE}/>
            </Switch>
        </AuthContainer>
    );
};