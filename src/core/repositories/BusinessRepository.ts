import {CRUDRepository} from "../interfaces/CRUDRepository";
import {GeneralConstants} from "../constants/GeneralConstants";
import {handleCommonCRUDError} from "../helpers/handleCommonCRUDError";
import {BusinessModel} from "../models/BusinessModel";

export class BusinessRepository implements CRUDRepository {

    async deleteById(token: string, organizationId: number): Promise<void> {
        const response = await fetch(GeneralConstants.BASE_URL + "/businessController/deleteBusinessById/"
            + organizationId, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": token,
            },
        });
        if (response.status !== 200) {
            handleCommonCRUDError(response.status);
        }
    }

    async getById(token: string, organizationId?: number): Promise<any> {
        const response = await fetch(GeneralConstants.BASE_URL + "/businessController/getBusinessById/"
            + organizationId, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": token,
            },
        });
        if (response.status === 200) {
            return await response.json() as BusinessModel;
        } else {
            handleCommonCRUDError(response.status);
        }
    }

    async requestList(token?: string, id?: number): Promise<Array<any>> {
        const response = await fetch(GeneralConstants.BASE_URL + "/businessController/getBusiness", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": token ?? "",
            },
        });
        if (response.status === 200) {
            return await response.json() as Array<BusinessModel>;
        } else {
            handleCommonCRUDError(response.status);
            return [];
        }
    }

    async save(token: string, organization: any): Promise<void> {
        const response = await fetch(GeneralConstants.BASE_URL + "/businessController/saveBusiness", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": token,
            },
            body: JSON.stringify(organization)
        });
        handleCommonCRUDError(response.status);
    }
}