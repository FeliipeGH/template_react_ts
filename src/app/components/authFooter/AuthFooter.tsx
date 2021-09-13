import React from 'react';
import styles from "../../../assets/styles/templateStyles";
import {makeStyles} from "@material-ui/core/styles";
import {Footer} from "../footer/Footer";
import {Box, Grid, List, ListItem, Typography} from "@material-ui/core";
import {authFooterStyles} from "./styles/authFooterStyles";
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import PinterestIcon from '@material-ui/icons/Pinterest';
import PlaceIcon from '@material-ui/icons/Place';

// @ts-ignore
const useStyles = makeStyles(styles);

// @ts-ignore
const useFooterStyles = makeStyles(authFooterStyles);

export const AuthFooter = () => {
    const classes = useStyles();
    const footerClasses = useFooterStyles();

    return (
        <Footer
            content={
                <div>
                    <div className={classes.left}>
                        <List className={classes.list}>
                            <ListItem className={classes.inlineBlock}>
                                <a
                                    href="https://www.linkedin.com/company/adpmx/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={footerClasses.socialMediaBottom}
                                >
                                    Linkedin &nbsp;
                                </a>
                            </ListItem>
                            <ListItem className={classes.inlineBlock}>
                                <a
                                    href="https://adpmx.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={footerClasses.socialMediaBottom}
                                >
                                    Blog
                                </a>
                            </ListItem>
                        </List>
                    </div>
                    <div className={classes.right + " " + footerClasses.copyRight}>
                        Copyright &copy; {new Date().getFullYear()}. Hecho por{" "}
                        <a
                            href="https://adpmx.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={footerClasses.copyRightBy}
                        >
                            ADPMX S.A DE C.V
                        </a>
                    </div>
                </div>
            }>
            <Box marginBottom="2rem">
                <Grid container spacing={8}>
                    <Grid item xs={12} sm={4} md={4}>
                        <Box className={footerClasses.footerTitle}>
                            Acerca
                        </Box>
                        <Box marginTop="1.3rem" className={footerClasses.fontSubtitle} component="p">
                            ADPMX cuenta con 20 años ofertando soluciones tecnológicas en diferentes industrias, siendo
                            una
                            de las mejores opciones de empresas PYME en cuanto a calidad y servicio se refiere.
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <Typography variant="caption">
                            <Box className={footerClasses.footerTitle}>
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
                                    className={footerClasses.socialMediaLink}
                                >
                                    <FacebookIcon/>&nbsp;Facebook
                                </a>
                            </Box>
                            <Box>
                                <a
                                    href="https://www.youtube.com/channel/UCm0ygonZPmWqplo1e_k3xVg"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={footerClasses.socialMediaLink}
                                >
                                    <YouTubeIcon/>&nbsp;YouTube
                                </a>
                            </Box>
                            <Box>
                                <a
                                    href="https://www.pinterest.com.mx/mexicoaeroespacial/_saved/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={footerClasses.socialMediaLink}
                                >
                                    <PinterestIcon/>&nbsp;Pinterest
                                </a>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                        <Typography variant="caption">
                            <Box className={footerClasses.footerTitle}>
                                Ubicación
                            </Box>
                        </Typography>
                        <Box className={classes.socialFeed} style={{
                            margin: "1rem 0"
                        }}>
                            <Box className={footerClasses.socialMedia}>
                                <PlaceIcon/>
                                <Box className={footerClasses.footerBody}>
                                    Calle Limas, Colonia Tlacoquemecatl, Del. Benito Juárez, CP. 03200, DF / CDMX
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Footer>
    );
};