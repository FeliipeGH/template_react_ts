import React from 'react';
import {CustomAppBar} from "../appBar/CustomAppBar";
import logo from "../../../assets/img/main/logo.png";
import {AppBarLinks} from "../appBarLinks/AppBarLinks";
import {makeStyles} from "@material-ui/core/styles";
import {authContainerStyles} from "./styles/authContainerStyles";
import {Box} from "@material-ui/core";
import landingImage from "../../../assets/img/main/landing.jpg";
import {AuthContainerInterface} from "./interfaces/AuthContainerInterface";
import {AuthFooter} from "../AuthFooter/AuthFooter";

// @ts-ignore
const useStyles = makeStyles(authContainerStyles);
export const AuthContainer = ({children}: AuthContainerInterface) => {
    const classes = useStyles();

    return (
        <div>
            <CustomAppBar branding="MercadoMX" logo={logo} description="Por ADPMX S.A De C.V"
                          links={<AppBarLinks/>}
            />
            <Box className={classes.pageHeader} style={{
                background: "linear-gradient(rgba(0,0,0,.15), rgba(0,0,0,.15)), url(" + landingImage + ")",
                backgroundSize: "cover",
                backgroundPosition: "top center"
            }}>
                {children}
            </Box>
            <AuthFooter/>
        </div>
    );
};
