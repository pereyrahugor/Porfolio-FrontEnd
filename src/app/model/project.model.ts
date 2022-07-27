export class project {

    id?: number;
    imgProject: String;
    nameProject: String;
    descriptionProject: String;
    linkProject: String;

    constructor(imgProject: String, nameProject: String, descriptionProject: String, linkProject: String) {

        this.imgProject = imgProject;
        this.nameProject = nameProject;
        this.descriptionProject = descriptionProject;
        this.linkProject = linkProject;

    }

}