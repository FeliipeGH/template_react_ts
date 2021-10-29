import {CRUDService, SaveParams} from "../../../interfaces/CRUDService";
import {CRUDRepository} from "../../../../core/interfaces/CRUDRepository";
import {ResultListData} from "../../../interfaces/RequestFunction";
import {closeAlert, showGenericAlert, showLoadingAlert} from "../../../components/alerts/Alerts";
import {handleCommonCRUDErrors} from "../../../helpers/handleShowAlertCommonErrors";

export class BusinessService implements CRUDService {

    crudRepository: CRUDRepository;

    constructor(crudRepository: CRUDRepository) {
        this.crudRepository = crudRepository;
    }

    async deleteById(organizationId: number, token: string | null | undefined): Promise<boolean> {
        try {
            if (token) {
                await this.crudRepository.deleteById(token, organizationId);
                return true;
            }
            return false;
        } catch (e) {
            await handleCommonCRUDErrors(e as Error);
            return false;
        }
    }

    async getById(organizationId: number, token: string): Promise<Object | null | undefined> {
        showLoadingAlert();
        try {
            const organization = await this.crudRepository.getById(token, organizationId);
            closeAlert();
            return organization;
        } catch (e) {
            closeAlert();
            await handleCommonCRUDErrors(e as Error);
            return null;
        }
    }

    async requestList(token: string | null | undefined): Promise<ResultListData> {
        try {
            if (token) {
                const response = await this.crudRepository.requestList(token);
                return {
                    resolved: true,
                    list: response,
                };
            }
            return {
                resolved: false,
            };
        } catch (e) {
            await handleCommonCRUDErrors(e as Error);
            return {
                resolved: false,
            };
        }
    }

    async save({token, object: organization}: SaveParams): Promise<boolean> {
        showLoadingAlert();
        try {
            await this.crudRepository.save(token, organization);
            closeAlert();
            showGenericAlert("Se ha guardado correctamente",).then();
            return true;
        } catch (e) {
            closeAlert();
            await handleCommonCRUDErrors(e as Error);
            return false;
        }
    }
}