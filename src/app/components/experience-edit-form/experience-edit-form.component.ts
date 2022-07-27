import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { experience } from 'src/app/model/experience.model';
import { ExperienceService } from 'src/app/service/experience.service';

@Component({
  selector: 'app-experience-edit-form',
  templateUrl: './experience-edit-form.component.html',
  styleUrls: ['./experience-edit-form.component.css']
})
export class ExperienceEditFormComponent implements OnInit {

  exp: experience = null;

  constructor(private experienceService: ExperienceService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienceService.detailExperience(id).subscribe(
      data => {
        this.exp = data;
      }, err => {
        alert("La modificación Falló");
        this.router.navigate(['']);
      }
    )
  }

  onUpdateExperience():void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienceService.updateExperience(id, this.exp).subscribe(
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
