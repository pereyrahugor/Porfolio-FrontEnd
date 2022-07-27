export class skill{

    id?: number;
    imgSkill: string;
    colorIn: string;
    colorOut: string;
    nameSkill: string;
    progress: number;

    constructor (imgSkill: string, colorIn: string, colorOut: string, nameSkill: string, progress: number) {

        this.imgSkill = imgSkill;
        this.colorIn = colorIn;
        this.colorOut = colorOut;
        this.nameSkill = nameSkill;
        this.progress = progress;

    }

}