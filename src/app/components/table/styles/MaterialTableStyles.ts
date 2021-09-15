import {Theme} from "@material-ui/core";
import {circularProgressContent, defaultFont} from "../../../../assets/styles/globalStyles";

export const materialTableStyles = (theme: Theme) => ({
    noElements: {
        ...defaultFont,
        fontWeight: "400",
        fontSize: "1rem"
    },
    circularProgressContent,
});