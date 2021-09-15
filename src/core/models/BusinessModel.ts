export class BusinessModel {
    businessId?: number;
    businessName: string;

    constructor(businessName: string, businessId?: number,) {
        this.businessId = businessId;
        this.businessName = businessName;
    }
}