import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {profileStyles} from "../styles/profileStyles";
import {Box, Grid, Typography} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store/mainStore";
import {getRoleName} from "../../../helpers/getRole";

// @ts-ignore
const useStyles = makeStyles(profileStyles);
export const ProfileHeader = () => {
    const classes = useStyles();
    const {userName, authorities} = useSelector((state: RootState) => state.loginReducer);

    return (
        <Grid container justifyContent="center">
            <Grid item>
                <Box className={classes.profileContentIcon}>
                    <AccountCircleIcon className={classes.profileIcon}/>
                </Box>
                <Box>
                    <Typography className={classes.userName}>
                        {userName}
                    </Typography>
                    <Typography className={classes.rolName}>
                        {getRoleName(authorities)}
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
};
