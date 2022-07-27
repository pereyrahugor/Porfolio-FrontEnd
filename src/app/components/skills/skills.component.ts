import { Component, OnInit } from '@angular/core';
import { skill } from 'src/app/model/skill.model';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skill: skill[] = [];
 
  constructor(public skillService: SkillService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.getDataSkill();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }

  getDataSkill(): void {
    this.skillService.listSkill().subscribe(data => {this.skill = data});
  }

  onDeleteSki(id?: number): void {
    if(id != undefined){
      this.skillService.deleteSkill(id).subscribe(
        data => {
          this.skillService.listSkill().subscribe(data => {this.skill = data});
          alert ("Se elimino correctamente el elemento selecionado.");
        },
        err => {
          alert ("No se puedo eliminar la experiencia selecionada");
        }
        )
      }
    }

}
