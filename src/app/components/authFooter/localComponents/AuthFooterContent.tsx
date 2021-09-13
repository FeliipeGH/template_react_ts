import React from 'react';
import {makeStyles} from "@material-ui/core/styles";

import {Box, Grid, Typography} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import PinterestIcon from "@material-ui/icons/Pinterest";
import PlaceIcon from "@material-ui/icons/Place";
import {authFooterStyles} from "../styles/authFooterStyles";
import {DashboardFooter} from "../../dashboard/localComponents/DashboardFooter";

// @ts-ignore
const useStyles = makeStyles(authFooterStyles);
export const AuthFooterContent = () => {
    const classes = useStyles();

    return (
        <Box marginTop="2.5rem">
            <Box marginBottom="2rem">
                <Grid container spacing={8}>
                    <Grid item xs={12} sm={4} md={4}>
                        <Box className={classes.footerTitle}>
                            Acerca
                        </Box>
                        <Box marginTop="1.3rem" className={classes.fontSubtitle} component="p">
                            ADPMX cuenta con 20 años ofertando soluciones tecnológicas en diferentes industrias, siendo
                            una
                            de las mejores opciones de empresas PYME en cuanto a calidad y servicio se refiere.
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <Typography variant="caption">
                            <Box className={classes.footerTitle}>
                                Redes sociales
                            </Box>
                        </Typography>
                        <Box className={classes.socialFeed} style={{
                            margin: "1rem 0",
                        }}>
                            <Box>
                                <a
                                    href="https://www.facebook.com/ADPMX-Arte-en-Dise%C3%B1o-y-Programaci%C3%B3n-MX-366909034102280"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={classes.socialMediaLink}
                                >
                                    <FacebookIcon/>&nbsp;Facebook
                                </a>
                            </Box>
                            <Box>
                                <a
                                    href="https://www.youtube.com/channel/UCm0ygonZPmWqplo1e_k3xVg"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={classes.socialMediaLink}
                                >
                                    <YouTubeIcon/>&nbsp;YouTube
                                </a>
                            </Box>
                            <Box>
                                <a
                                    href="https://www.pinterest.com.mx/mexicoaeroespacial/_saved/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={classes.socialMediaLink}
                                >
                                    <PinterestIcon/>&nbsp;Pinterest
                                </a>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <Typography variant="caption">
                            <Box className={classes.footerTitle}>
                                Ubicación
                            </Box>
                        </Typography>
                        <Box className={classes.socialFeed} style={{
                            margin: "1rem 0"
                        }}>
                            <Box className={classes.socialMedia}>
                                <PlaceIcon/>
                                <Box className={classes.footerBody}>
                                    Calle Limas, Colonia Tlacoquemecatl, Del. Benito Juárez, CP. 03200, DF / CDMX
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <DashboardFooter/>
        </Box>
    );
};
