import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { skill } from 'src/app/model/skill.model';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-skill-edit-form',
  templateUrl: './skill-edit-form.component.html',
  styleUrls: ['./skill-edit-form.component.css']
})
export class SkillEditFormComponent implements OnInit {

  ski: skill = null;

  constructor(private skillService: SkillService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillService.detailSkill(id).subscribe(
      data => {
        this.ski = data;
      }, err => {
        alert("La modificación Falló");
        this.router.navigate(['']);
      }
    )
  }

  onUpdateSkill():void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillService.updateSkill(id, this.ski).subscribe(
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
