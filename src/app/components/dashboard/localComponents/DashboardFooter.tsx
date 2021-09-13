import React from 'react';
import {Box, Divider, List, ListItem} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {dashboardFooterStyles} from "../styles/footerStyles";

// @ts-ignore
const useStyles = makeStyles(dashboardFooterStyles);
export const DashboardFooter = () => {
    const classes = useStyles();
    return (
        <footer>
            <Divider/>
            <Box marginTop="0.5rem">
                <Box className={classes.left}>
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
                </Box>
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
            </Box>
        </footer>
    );
};