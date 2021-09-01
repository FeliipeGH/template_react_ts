import React from 'react';
import {CustomAppBar} from "../appBar/CustomAppBar";
import logo from "../../../assets/img/main/logo.png";
import {AppBarLinks} from "../appBarLinks/AppBarLinks";
import {makeStyles} from "@material-ui/core/styles";
import {authContainerStyles} from "./styles/authContainerStyles";
import {Box, Card, Grid, Typography} from "@material-ui/core";
import landingImage from "../../../assets/img/main/landing.jpg";
import {AuthContainerInterface} from "./interfaces/AuthContainerInterface";
import {AuthFooter} from "../AuthFooter/AuthFooter";

// @ts-ignore
const useStyles = makeStyles(authContainerStyles);
export const AuthContainer = ({children, title}: AuthContainerInterface) => {
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
                <Box className={classes.container}>
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={12} md={4}>
                            <Card>
                                <Typography variant="h5" align="center" className={classes.title}>
                                    {title}
                                </Typography>
                                {children}
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <AuthFooter/>
        </div>
    );
};
