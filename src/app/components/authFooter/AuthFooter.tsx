import React from 'react';
import styles from "../../../assets/styles/templateStyles";
import {makeStyles} from "@material-ui/core/styles";
import {Footer} from "../footer/Footer";
import {List, ListItem} from "@material-ui/core";
import {AuthFooterContent} from "./localComponents/AuthFooterContent";

// @ts-ignore
const useStyles = makeStyles(styles);

interface CustomFooterInterface {
    showAuthFooter?: boolean,
}

export const AuthFooter = ({showAuthFooter = true}: CustomFooterInterface) => {
    const classes = useStyles();

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
                                    className={classes.socialMediaBottom}
                                >
                                    Linkedin &nbsp;
                                </a>
                            </ListItem>
                            <ListItem className={classes.inlineBlock}>
                                <a
                                    href="https://adpmx.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={classes.socialMediaBottom}
                                >
                                    Blog
                                </a>
                            </ListItem>
                        </List>
                    </div>
                    <div className={classes.right + " " + classes.copyRight}>
                        Copyright &copy; {new Date().getFullYear()}. Hecho por{" "}
                        <a
                            href="https://adpmx.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={classes.copyRightBy}
                        >
                            ADPMX S.A DE C.V
                        </a>
                    </div>
                </div>
            }>
            {
                showAuthFooter && (
                    <AuthFooterContent/>
                )
            }
        </Footer>
    );
};