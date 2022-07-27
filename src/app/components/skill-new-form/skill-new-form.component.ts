import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { skill } from 'src/app/model/skill.model';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-skill-new-form',
  templateUrl: './skill-new-form.component.html',
  styleUrls: ['./skill-new-form.component.css']
})
export class SkillNewFormComponent implements OnInit {

    imgSkill!: string;
    colorIn!: string;
    colorOut!: string;
    nameSkill!: string;
    progress!: number;

  constructor(private skillService: SkillService, private router: Router) { }

  ngOnInit(): void {}

  onNewSkill(): void {
    const ski = new skill(this.imgSkill, this.colorIn, this.colorOut, 
                                      this.nameSkill, this.progress);
    console.log(skill);
    this.skillService.saveSkill(ski).subscribe(data=>{
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
