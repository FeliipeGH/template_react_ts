import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import classNames from "classnames";
import styles from "../../../assets/styles/footerStyle";
import {FooterInterface} from "./interfaces/FooterInterface";

// @ts-ignore
const useStyles = makeStyles(styles);
export const Footer = ({
                           big,
                           content,
                           children,
                           showHr = false,
                       }: FooterInterface) => {

    const classes = useStyles();

    const footerClasses = classNames({
        [classes.footer]: true,
        [classes.big]: big || children !== undefined,
        [classes.container]: false,
    });

    return (
        <footer className={footerClasses}>
            <div className={classes.container}>
                {children !== undefined ? (
                    <div>
                        <div className={classes.content}>{children}</div>
                        {showHr && <hr/>}
                    </div>
                ) : (
                    " "
                )}
                {content}
                <div className={classes.clearFix}/>
            </div>
        </footer>
    );
};