import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { education } from 'src/app/model/education.model';
import { EducationService } from 'src/app/service/education.service';

@Component({
  selector: 'app-education-edit-form',
  templateUrl: './education-edit-form.component.html',
  styleUrls: ['./education-edit-form.component.css']
})
export class EducationEditFormComponent implements OnInit {

  edu: education = null;

  constructor(private educationService: EducationService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.educationService.detailEducation(id).subscribe(
      data => {
        this.edu = data;
      }, err => {
        alert("La modificación Falló");
        this.router.navigate(['']);
      }
    )
  }

  onUpdateEducation():void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.educationService.updateEducation(id, this.edu).subscribe(
      data => {
        alert("La modificación se realizo correctamente.");
        this.router.navigate(['']);
      }, err => {
        alert("La modificación Falló");
        this.router.navigate(['']);
      }
    )
  }

  volver(){
    this.router.navigate(['/'])
  }

}

