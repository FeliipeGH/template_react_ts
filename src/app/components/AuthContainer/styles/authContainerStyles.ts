import {Theme} from "@material-ui/core";
import {blackColor, hexToRgb, whiteColor} from "../../../../assets/styles/globalStyles";

export const authContainerStyles = (theme: Theme) => ({
    pageHeader: {
        color: whiteColor,
        border: "0",
        height: "100%",
        margin: "0",
        display: "flex!important",
        padding: "120px 0",
        position: "relative",
        minHeight: "100vh",
        alignItems: "center",
        "&:before": {
            background: "rgba(" + hexToRgb(blackColor) + ", 0.5)"
        },
        "&:before,&:after": {
            position: "absolute",
            zIndex: "1",
            width: "100%",
            height: "100%",
            display: "block",
            left: "0",
            top: "0",
            content: '""'
        }
    },
});