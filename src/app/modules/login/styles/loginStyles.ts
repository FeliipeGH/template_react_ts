import {Theme} from "@material-ui/core";
import {container} from "../../../../assets/styles/globalStyles";

export const loginStyles = (theme: Theme) => ({
    container: {
        ...container,
        zIndex: "4",
        [theme.breakpoints.down("sm")]: {
            paddingBottom: "100px"
        }
    },
    form: {
        margin: "0",
        padding: "2rem"
    },
    submitButton: {
        margin: "1.5rem 0"
    },
    title: {
        margin: "2rem 0 0",
    }
})