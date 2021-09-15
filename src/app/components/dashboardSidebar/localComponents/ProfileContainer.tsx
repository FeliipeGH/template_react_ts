import React from 'react';
import {sideElementStyles} from "../styles/sideElementStyles";
import {makeStyles} from "@material-ui/core/styles";
import {ProfileContainerInterface} from "../interfaces/ProfileContainerInterface";
import ContactMailIcon from '@material-ui/icons/ContactMail';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {CollapseElement} from "../interfaces/CollapseElement";
import {List} from "@material-ui/core";
import {ModuleSideListItem} from "./ModuleSideListItem";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import {RouteConstants} from "../../../router/constants/RouteConstants";
// @ts-ignore
const useStyles = makeStyles(sideElementStyles);
export const ProfileContainer = ({isOpenMini, isOpenTemporalMenu}: ProfileContainerInterface) => {
    const classes = useStyles();

    const onLogOut = () => {
        console.log("1")
    };

    const collapseList: Array<CollapseElement> = [
        {
            title: "Mi perfil",
            icon: ContactMailIcon,
            url: RouteConstants.PROFILE
        },
        {
            title: "Cerrar sesión",
            icon: ExitToAppIcon,
            onClick: onLogOut,
        },
    ];

    return (
        <List component="nav" aria-labelledby="nested-list-subheader" className={classes.root}>
            <ModuleSideListItem title="Felipe" isOpenMini={isOpenMini} icon={AccountCircleIcon}
                                isOpenTemporalMenu={isOpenTemporalMenu} collapseList={collapseList}/>
        </List>
    );
};