export class education {
    
    id?: number;
    imgInstitute: string;
    title: string;
    yearStudied: Date;
    duration: string;
    descriptionEducation: string;

    constructor (imgInstitute: string, title: string, yearStudied: Date, duration: string, descriptionEducation: string) {

        this.imgInstitute = imgInstitute;
        this.title = title;
        this.yearStudied = yearStudied;
        this.duration = duration;
        this.descriptionEducation = descriptionEducation;
    }

}