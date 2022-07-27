import { Component, OnInit } from '@angular/core';
import { experience } from 'src/app/model/experience.model';
import { ExperienceService } from 'src/app/service/experience.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

  experience: experience[] = [];

  constructor(private experienceService: ExperienceService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.getDataExperience();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }

  getDataExperience(): void {
    this.experienceService.listExperience().subscribe(data => {this.experience = data});
  }

  onDeleteExp(id?: number): void {
    if(id != undefined){
      this.experienceService.deleteExperience(id).subscribe(
        data => {
          this.experienceService.listExperience().subscribe(data => {this.experience = data});
          alert ("Se elimino correctamente el elemento selecionado.");
        },
        err => {
          alert ("No se puedo eliminar la experiencia selecionada");
        }
        )
      }
    }
  }

