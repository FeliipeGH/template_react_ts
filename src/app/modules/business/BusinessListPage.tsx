import React from 'react';
import BusinessIcon from '@material-ui/icons/Business';
import {CardContainer} from "../../components/cardContainer/CardContainer";
import {createRowFunction} from "../../components/table/interfaces/ProcessFunctionTypes";
import {EditDeleteButtonsToTable} from "../../components/buttons/EditDeleteButtonsToTable";
import {MaterialTable} from "../../components/table/MaterialTable";
import {useHistory} from "react-router-dom";
import {RouteConstants} from "../../router/constants/RouteConstants";

export const BusinessListPage = () => {
    //const {loading, listData, onDeleteElement, token} = useRequestListData(getCategoryList);
    const history = useHistory();

    const createObjectRow: createRowFunction = (object: Object, index: number) => {
        return {
            businessId: object["businessId"],
            businessName: object["businessName"],
            actions: <EditDeleteButtonsToTable
                onDeleteButton={() => handleDelete(object["businessId"], index)}
                onEditButton={() => handleEditElement(object["businessId"])}
            />
        };
    };

    const handleDelete = (id: number, index: number) => {
        //handleRequestDelete(onDelete, id, index);
    };

    const handleEditElement = (objectId: number) => {
        //history.push(RouteConstants.CREATE_CATEGORY + "?q=" + objectId);
    };

    const handleAdd = () => {
        history.push(RouteConstants.BUSINESS_CREATE);
    };

    return (
        <CardContainer icon={BusinessIcon} onClick={handleAdd}>
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
                data={[]}
                createObjectRow={createObjectRow}
                loading={false}
            />
        </CardContainer>
    );
};