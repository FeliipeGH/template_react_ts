import React from 'react';
import BusinessIcon from '@material-ui/icons/Business';
import {CardContainer} from "../../components/cardContainer/CardContainer";
import {MaterialTable} from "../../components/table/MaterialTable";
import {RouteConstants} from "../../router/constants/RouteConstants";
import {BusinessService} from "./services/BusinessService";
import {BusinessRepository} from "../../../core/repositories/BusinessRepository";
import {useRequestListData} from "../../hooks/useRequestListData";
import {useCreateObjectRow} from "../../hooks/useCreateObjectRow";

const businessService = new BusinessService(new BusinessRepository());

export const BusinessListPage = () => {
    const {loading, listData, onDeleteElement} = useRequestListData(businessService);
    const createObjectRow = useCreateObjectRow("businessId", onDeleteElement, businessService,
        ["businessId", "businessName"], RouteConstants.BUSINESS_CREATE);

    return (
        <CardContainer icon={BusinessIcon} onClick={RouteConstants.BUSINESS_CREATE}>
            <MaterialTable
                columns={[
                    {
                        Header: "Empresa",
                        accessor: "businessName"
                    },
                    {
                        Header: "Acciones",
                        accessor: "actions"
                    }
                ]}
                data={listData}
                createObjectRow={createObjectRow}
                loading={loading}
            />
        </CardContainer>
    );
};