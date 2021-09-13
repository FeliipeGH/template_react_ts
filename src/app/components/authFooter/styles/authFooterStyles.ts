import {Theme} from "@material-ui/core";
import {ColorList} from "../../../theme/ColorList";
import {defaultFont, grayColor} from "../../../../assets/styles/globalStyles";

export const authFooterStyles = (theme: Theme) => ({
    socialMediaLink: {
        ...defaultFont,
        fontWeight: "400",
        margin: "0.25rem 0",
        display: "inline-flex",
        alignItems: "center",
        color: grayColor[1],
        textDecoration: "none",
        "&:hover": {
            color: ColorList.secondaryMain,
        }
    },
    copyRight: {
        ...defaultFont,
        fontSize: "0.875rem",
        margin: "1rem 0 1rem"
    },
    copyRightBy: {
        ...defaultFont,
        fontSize: "0.875rem",
        fontWeight: "600",
        color: "#111",
        "&:hover": {
            color: ColorList.secondaryMain,
        }
    },
    socialMediaBottom: {
        ...defaultFont,
        fontWeight: "500",
        fontSize: "0.75rem",
        margin: "1.25rem",
        textTransform: "uppercase",
        color: "#000",
        display: "inline-flex",
        alignItems: "center",
        "&:hover": {
            color: ColorList.secondaryMain,
        }
    },
    socialMedia: {
        margin: "1rem 0",
        display: "inline-flex",
        alignItems: "center",
        color: grayColor[1],
        textDecoration: "none",
    },
    footerTitle: {
        ...defaultFont,
        lineHeight: "1.75rem",
        fontSize: "1.15rem",
        color: grayColor[1],
        fontWeight: "600"
    },
    fontSubtitle: {
        ...defaultFont,
        fontSize: "1rem",
        lineHeight: "1.5rem",
        textAlign: "justify"
    },
    footerBody: {
        ...defaultFont,
        fontSize: "0.875rem"
    }
});