import React from 'react';
import {Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {profileStyles} from "./styles/profileStyles";
import Parallax from "../../components/extras/components/parallax/Parallax";
import bg from "../../../assets/img/main/landing.jpg";
import {ProfileDivider} from "./localComponents/ProfileDivider";
import {ProfileHeader} from "./localComponents/ProfileHeader";
import {UserData} from "./localComponents/UserData";

// @ts-ignore
const useStyles = makeStyles(profileStyles);

export const ProfilePage = () => {
    const classes = useStyles();
    console.log('profi')

    return (
        <Box>
            <Box className={classes.mainContent}>
                <Box className={classes.content}>
                    <Parallax
                        image={bg}
                        filter="dark"
                        style={{backgroundPosition: "0 60%"}}
                        className={classes.parallax}
                    />
                </Box>
            </Box>
            <Box className={classes.profileContainer}>
                <ProfileHeader/>
                <ProfileDivider/>
                <UserData/>
            </Box>
        </Box>
    );
};