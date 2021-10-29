import React from 'react';
import {GeneralDialog} from "../../../components/dialogs/GeneralDialog";
import {Box} from "@material-ui/core";


export const TestDialog = ({openDialog, setOpenDialog}) => {
    return (
        <GeneralDialog
            title="Test dialogo"
            openDialog={openDialog}
            setOpenDialog={setOpenDialog}
            isLargest={false}
        >
            <Box>
                dialogo de prueba
            </Box>
        </GeneralDialog>
    );
};