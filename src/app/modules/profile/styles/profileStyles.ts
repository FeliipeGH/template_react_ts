import {Theme} from "@material-ui/core";
import {defaultFont, grayColor, transition} from "../../../../assets/styles/globalStyles";

export const profileStyles = (theme: Theme) => ({
    mainContent: {
        /*margin: "-7rem 0 0 -2rem",*/
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        width: "100%",
        minHeight: "20rem"
    },
    content: {
        position: "relative",
        margin: "1rem 0 0"
    },
    parallax: {
        height: "380px",
        backgroundPosition: "top center"
    },
    profileContainer: {
        position: "relative",
        marginTop: "12rem",
        minHeight: "12rem",
        zIndex: "30",
        width: "100%",
        background: "#fff",
        borderRadius: "6px",
        boxShadow: "0 16px 24px 2px rgb(0 0 0 / 14%), 0 6px 30px 5px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(0 0 0 / 20%)",
        padding: "1.25rem"
    },
    profileContentIcon: {
        marginTop: "-5rem",
    },
    profileIcon: {
        borderRadius: "50% !important",
        maxWidth: "100%",
        height: "auto",
        fontSize: "10rem",
        background: "#fff",
        color: grayColor[1]
    },
    userName: {
        ...defaultFont,
        fontSize: "1.125rem",
        fontWeight: "600",
        textAlign: "center",
        textTransform: "uppercase",
        color: grayColor[1]
    },
    rolName: {
        ...defaultFont,
        textAlign: "center",
        fontSize: "1rem",
        fontWeight: "400",
        textTransform: "uppercase",
        color: grayColor[1]
    },
    dividerContainer: {
        width: "100%",
        display: "grid",
        placeContent: "center"
    },
    divider: {
        margin: "1rem 0",
        ...transition,
        [theme.breakpoints.up("xs")]: {
            width: "16rem",
        },
        [theme.breakpoints.up("sm")]: {
            width: "28rem",
        },
        [theme.breakpoints.up("md")]: {
            width: "35rem",
        },
    },
    dataContainer: {
        width: "100%",
        display: "grid",
        placeContent: "center"
    },
    contentData: {
        margin: "1rem 0",
        [theme.breakpoints.up("xs")]: {
            width: "15rem",
        },
        [theme.breakpoints.up("sm")]: {
            width: "25rem",
        },
        [theme.breakpoints.up("md")]: {
            width: "33rem",
        },
    },
    title: {
        ...defaultFont,
        fontWeight: "500",
        textAlign: "left",
        margin: "0.035rem 0",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
    },
    value: {
        ...defaultFont,
        textAlign: "left",
        margin: "0.035rem 0",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
    }
});