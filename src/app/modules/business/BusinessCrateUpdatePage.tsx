import React from 'react';
import {CardContainer} from "../../components/cardContainer/CardContainer";
import BusinessIcon from "@material-ui/icons/Business";
import {useForm} from "react-hook-form";
import {BusinessModel} from "../../../core/models/BusinessModel";
import {anyValueRule} from "../../rules/globalRules";
import {MaterialInput} from "../../components/materialInput/MaterialInput";
import {Button, Grid, makeStyles} from "@material-ui/core";
import {businessListStyles} from "./styles/businessListStyles";

// @ts-ignore
const useStyles = makeStyles(businessListStyles);
export const BusinessCreateUpdatePage = () => {
    const classes = useStyles();
    const {handleSubmit, control} = useForm();

    const onSubmit = (data: BusinessModel) => {
        console.log(data);
    }

    return (
        <CardContainer icon={BusinessIcon} showButton={false} title="Agregar negocio">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container>
                    <Grid item xs={12} sm={8} md={6} lg={4}>
                        <MaterialInput
                            title="Empresa"
                            inputId="business"
                            icon={BusinessIcon}
                            control={control}
                            rules={{...anyValueRule("Ingresa la empresa")}}
                        />
                    </Grid>
                </Grid>
                <Button type="submit" color="primary" variant="contained" className={classes.submitButton}>
                    Guardar
                </Button>
            </form>
        </CardContainer>
    );
};