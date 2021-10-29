import React, {useState} from 'react';
import {CardContainer} from "../../components/cardContainer/CardContainer";
import BusinessIcon from "@material-ui/icons/Business";
import {useForm} from "react-hook-form";
import {anyValueRule} from "../../rules/globalRules";
import {MaterialInput} from "../../components/materialInput/MaterialInput";
import {Grid} from "@material-ui/core";
import {useRequestDataFromObject} from "../../hooks/useRequestDataFromObject";
import {RouteConstants} from "../../router/constants/RouteConstants";
import {BusinessService} from "./services/BusinessService";
import {BusinessRepository} from "../../../core/repositories/BusinessRepository";
import {MaterialButton} from "../../components/buttons/MaterialButton";
import {TestDialog} from "./dialogs/TestDialog";

const businessService = new BusinessService(new BusinessRepository());

export const BusinessCreateUpdatePage = () => {
    const {handleSubmit, control, setValue} = useForm();
    // abrir dialogo de prueba
    const [openDialog, setOpenDialog] = useState(false);

    useRequestDataFromObject(businessService, setValue, ["businessId", "businessName"],
        RouteConstants.BUSINESS_LIST);

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <CardContainer icon={BusinessIcon} showButton={false} title="Agregar negocio">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container>
                    <Grid item xs={12} sm={8} md={6} lg={4}>
                        <MaterialInput
                            title="Empresa"
                            inputId="businessName"
                            icon={BusinessIcon}
                            control={control}
                            rules={{...anyValueRule("Ingresa la empresa")}}
                        />
                    </Grid>
                </Grid>
                <MaterialButton/>
            </form>
            <MaterialButton type="button" title="abrir diálogo prueba"/>
            <TestDialog openDialog={openDialog} setOpenDialog={setOpenDialog}/>
        </CardContainer>
    );
};