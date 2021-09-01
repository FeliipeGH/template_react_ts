import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {appBarLinksStyle} from "./styles/appBarLinksStyles";
import {List, ListItem} from "@material-ui/core";
import {RouteConstants} from "../../router/constants/RouteConstants";
import {Link} from "react-router-dom";

// @ts-ignore
const useStyles = makeStyles(appBarLinksStyle);

export const AppBarLinks = () => {
    const classes = useStyles();

    const navLinkNoSelect = classes.navLink + " " + classes.navLinkHover;
    const navLinkSelect = classes.navLink + " " + classes.navLinkSelected;

    return (
        <List className={classes.list + " " + classes.mlAuto}>
            <ListItem className={classes.listItem}>
                <a href="https://mexicoaeroespacial.com.mx/" target="_blank" rel="noopener noreferrer"
                   className={navLinkNoSelect}>
                    Blog
                </a>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Link to={RouteConstants.MAIN_PAGE}
                      className={window.location.pathname === RouteConstants.MAIN_PAGE ? navLinkSelect : navLinkNoSelect}
                >
                    Productos
                </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Link to={RouteConstants.LOGIN_PAGE}
                      className={
                          window.location.pathname === RouteConstants.LOGIN_PAGE
                          || window.location.pathname === RouteConstants.REGISTER_PAGE
                              ? navLinkSelect : navLinkNoSelect}
                >
                    Acceder
                </Link>
            </ListItem>
        </List>
    );
};