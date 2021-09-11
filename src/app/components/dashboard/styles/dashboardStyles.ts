import {Theme} from "@material-ui/core";

export const dashboardStyles = (theme: Theme) => ({
    wrapper: {
        position: "relative",
        top: "0",
        height: "100vh",
        "&:after": {
            display: "table",
            clear: "both",
            content: '" "',
        },
    },
});