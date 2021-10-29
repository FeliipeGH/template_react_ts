import React, {useEffect, useState} from 'react';
import {RouteConstants} from "./constants/RouteConstants";
import {Redirect, Switch} from "react-router";
import {DashboardRoutes} from "./dashboard/DashboardRoutes";
import {AuthRoutes} from "./auth/AuthRoutes";
import {Box, CircularProgress} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {appRouterStyles} from "./styles/appRouterStyles";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/mainStore";
import {checkAuth, getUserDataFromLocalStorage} from "../helpers/checkAuth";
import {doLogin, logOut} from "../../store/modules/login/loginActions";
import {LoginState} from "../../store/modules/login/LoginTypes";
import {useIsMounted} from "../hooks/useIsMounted";
import {AuthRoutesContainer} from "./auth/AuthRoutesContainer";
import {DashboardRoutesContainer} from "./dashboard/DashboardRoutesContainer";
import {useLocation} from "react-router-dom";

// @ts-ignore
const useStyles = makeStyles(appRouterStyles);
export const AppRouter = () => {
    const classes = useStyles();
    const isMounted = useIsMounted();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [checking, setChecking] = useState(true);
    const userData = useSelector((state: RootState) => state.loginReducer);
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        if (isMounted.current) setChecking(true);
        const isAuth = checkAuth();
        const emptyUserData = userData.authorities === null &&
            userData.userName === null && userData.expiration
            === null && userData.token === null;
        if (isAuth && emptyUserData) {
            const userLocalData = JSON.parse(getUserDataFromLocalStorage()) as LoginState;
            dispatch(doLogin(userLocalData));
        }
        if (!isAuth && !emptyUserData) {
            dispatch(logOut());
        }
        if (isMounted.current) {
            setChecking(false);
            setIsAuthenticated(isAuth);
        }
    }, [userData, dispatch, isMounted, location.pathname]);

    if (checking) {
        return (
            <Box className={classes.circularProgressContent}>
                <CircularProgress color="primary" size="2.5rem"/>
            </Box>
        );
    }

    return (
        <Switch>
            <AuthRoutesContainer path={RouteConstants.AUTH_PAGE} component={AuthRoutes}
                                 isAuthenticated={isAuthenticated}/>
            <DashboardRoutesContainer path={RouteConstants.DASHBOARD_ROOT} component={DashboardRoutes}
                                      isAuthenticated={isAuthenticated}/>
            <Redirect to={RouteConstants.AUTH_PAGE}/>
        </Switch>
    );
};