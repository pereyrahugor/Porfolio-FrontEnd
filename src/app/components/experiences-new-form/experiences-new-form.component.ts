import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { experience } from 'src/app/model/experience.model';
import { ExperienceService } from 'src/app/service/experience.service';

@Component({
  selector: 'app-experiences-new-form',
  templateUrl: './experiences-new-form.component.html',
  styleUrls: ['./experiences-new-form.component.css']
})
export class ExperiencesNewFormComponent implements OnInit {

    imgBusiness!: string;
    business!: string;
    position!: string;
    yearIn!: Date;
    yearOut!: Date;
    descriptionPosition!: string;

  constructor(private experienceService: ExperienceService, private router: Router) { }

  ngOnInit(): void {}

  onNewExperience(): void {
    const exp = new experience(this.imgBusiness, this.business, this.position, 
                                      this.yearIn, this.yearOut, this.descriptionPosition);
    console.log(experience);
    this.experienceService.saveExperience(exp).subscribe(data=>{
      alert("Se agrego una nueva experiencia correctamente");
      this.router.navigate(['']);
    }, err=>{
      alert("La creación Falló");
      this.router.navigate(['']);
    });                                  
  }

  volver(){
    this.router.navigate(['/'])
  }

}
