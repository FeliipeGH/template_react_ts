import {useGetToken} from "./useGetToken";
import {useHistory} from "react-router-dom";
import {createRowFunction} from "../components/table/interfaces/ProcessFunctionTypes";
import {EditDeleteButtonsToTable} from "../components/buttons/EditDeleteButtonsToTable";
import {CONTINUE_QUESTION_TITLE, GENERAL_QUESTION_TEXT, showGenericAlert} from "../components/alerts/Alerts";
import React from "react";
import {CRUDService} from "../interfaces/CRUDService";

type UseCreateObjectRowProps = (id: string, onDeleteElement: (index: number) => void, service: CRUDService, objectAttributes: Array<string>,
                                routeAfterEdit: string, showEdit?: boolean, showDelete?: boolean) => createRowFunction;

export const useCreateObjectRow: UseCreateObjectRowProps = (id, onDeleteElement, service,
                                                            objectAttributes, routeAfterEdit,
                                                            showEdit = true, showDelete = true) => {
    const token = useGetToken();
    const history = useHistory();

    const createObjectRow: createRowFunction = (object: Object, index: number) => {
        let objAux = {};
        let aux;
        for (let i = 0; i < objectAttributes.length; i++) {
            aux = object[objectAttributes[i]];
            if (typeof aux === "boolean") {
                aux = object[objectAttributes[i]] ? "Si" : "No";
            }
            // todo if is list create collapse as future requirement
            objAux[objectAttributes[i]] = aux;
        }
        return {
            ...objAux,
            actions: <EditDeleteButtonsToTable
                showDelete={showDelete}
                showEdit={showEdit}
                onDeleteButton={() => handleDelete(object[id], index)}
                onEditButton={() => handleEditElement(object[id])}
            />
        };
    };

    const handleDelete = async (id: number, index: number) => {
        if (showDelete) {
            await showGenericAlert(GENERAL_QUESTION_TEXT, CONTINUE_QUESTION_TITLE, "question", {
                    onConfirm: async () => {
                        const result = await service.deleteById(id, token);
                        if (result) onDeleteElement(index);
                    }
                }, true
            );
        }
    };

    const handleEditElement = (objectId: number) => {
        if (showEdit) history.push(routeAfterEdit + "?q=" + objectId);
    };

    return createObjectRow;
};