import {Theme} from "@material-ui/core";
import {ColorList} from "../../../theme/ColorList";

export const authFooterStyles = (theme: Theme) => ({
    socialMediaLink: {
        margin: "0.25rem 0",
        display: "inline-flex",
        alignItems: "center",
        color: "black",
        textDecoration: "none",
        "&:hover": {
            color: ColorList.secondaryMain,
        }
    },
    socialMedia: {
        margin: "1rem 0",
        display: "inline-flex",
        alignItems: "center",
        color: "black",
        textDecoration: "none",
    },
});