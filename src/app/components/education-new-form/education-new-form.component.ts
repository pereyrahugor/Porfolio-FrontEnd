import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { education } from 'src/app/model/education.model';
import { EducationService } from 'src/app/service/education.service';

@Component({
  selector: 'app-education-new-form',
  templateUrl: './education-new-form.component.html',
  styleUrls: ['./education-new-form.component.css']
})
export class EducationNewFormComponent implements OnInit {

  imgInstitute!: string;
  title!: string;
  yearStudied!: Date;
  duration!: string;
  descriptionEducation!: string;

  constructor(private educationService: EducationService, private router: Router) { }

  ngOnInit(): void {}

  onNewEducation(): void {
    const edu = new education(this.imgInstitute, this.title, this.yearStudied, 
                                      this.duration, this.descriptionEducation);
    console.log(education);
    this.educationService.saveEducation(edu).subscribe(data=>{
      alert("Se agrego una nueva educación correctamente");
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
