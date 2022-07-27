export class experience {

    id?: number;
    imgBusiness: string;
    business: string;
    position: string;
    yearIn: Date;
    yearOut: Date;
    descriptionPosition: string;

    constructor (imgBusiness: string, business: string, position: string,
                 yearIn: Date, yearOut: Date, descriptionPosition: string) {
        
        this.imgBusiness = imgBusiness;
        this.business = business;
        this.position = position;
        this.yearIn = yearIn;
        this.yearOut = yearOut;
        this.descriptionPosition = descriptionPosition;
        }

}