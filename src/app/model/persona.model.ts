export class persona {
    
    id?: number;
    name: String;
    lastName: String;
    text: String;
    description: String;
    imgPerfil: String;
    imgBanner: String;
    country: String;
    estate: String;
    contact: String;

    constructor (name: String, lastName: String, text: String, description: String, imgPerfil: String, imgBanner: String,
                country: String, estate: String, contact: String) {

        this.name = name;
        this.lastName = lastName;
        this.text = text;
        this.description = description;
        this.imgPerfil = imgPerfil;
        this.imgBanner = imgBanner;
        this.country = country;
        this.estate = estate;
        this.contact = contact;
    }
}