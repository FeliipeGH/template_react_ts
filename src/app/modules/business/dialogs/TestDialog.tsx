import React from 'react';
import {GeneralDialog} from "../../../components/dialogs/GeneralDialog";
import {Box} from "@material-ui/core";

interface TestDialogInterface {
    openDialog: boolean,
    setOpenDialog: (value: boolean) => void,
}

export const TestDialog = ({openDialog, setOpenDialog}: TestDialogInterface) => {
    return (
        <GeneralDialog
            title="Test dialogo"
            openDialog={openDialog}
            setOpenDialog={setOpenDialog}
        >
            <Box>
                dialogo de prueba
            </Box>
        </GeneralDialog>
    );
};