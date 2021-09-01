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
                                    href="https://www.facebook.com/mexicoaeroespacial/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={footerClasses.socialMediaLink}
                                >
                                    Linkedin &nbsp;
                                </a>
                            </ListItem>
                            <ListItem className={classes.inlineBlock}>
                                <a
                                    href="https://twitter.com/maeroespacial"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={footerClasses.socialMediaLink}
                                >
                                    Twitter
                                </a>
                            </ListItem>
                        </List>
                    </div>
                    <div className={classes.right}>
                        Copyright &copy; {new Date().getFullYear()}. Hecho por{" "}
                        <a
                            href="https://adpmx.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={footerClasses.socialMediaLink}
                        >
                            ADPMX S.A DE C.V
                        </a>
                    </div>
                </div>
            }>
            <Grid container>
                <Grid item xs={12} sm={4} md={4}>
                    <Typography variant="caption">
                        <Box component="span" fontWeight="500" fontSize="1.2rem">
                            Acerca
                        </Box>
                    </Typography>
                    <Box component="p">
                        Lo mejor en temas aeroespaciales y defensa.
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <Typography variant="caption">
                        <Box component="span" fontWeight="500" fontSize="1.2rem">
                            Redes sociales
                        </Box>
                    </Typography>
                    <Box className={classes.socialFeed} style={{
                        margin: "1rem 0",
                    }}>
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
                                href="https://www.facebook.com/Taliadecoracion"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={footerClasses.socialMediaLink}
                            >
                                <FacebookIcon/>&nbsp;Facebook
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
                        <Box component="span" fontWeight="500" fontSize="1.2rem">
                            Ubicación
                        </Box>
                    </Typography>
                    <Box className={classes.socialFeed} style={{
                        margin: "1rem 0"
                    }}>
                        <Box className={footerClasses.socialMedia}>
                            <PlaceIcon/> &nbsp;
                            {"Entrega a todo el país."}
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Footer>
    );
};