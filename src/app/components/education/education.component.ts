import { Component, OnInit } from '@angular/core';
import { education } from 'src/app/model/education.model';
import { EducationService } from 'src/app/service/education.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education: education[] = [];

  constructor(public educationService: EducationService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.getDataEducation();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }

  getDataEducation(): void {
    this.educationService.listEducation().subscribe(data => {this.education = data});
  }

  onDeleteEdu(id?: number): void {
    if(id != undefined){
      this.educationService.deleteEducation(id).subscribe(
        data => {
          this.educationService.listEducation().subscribe(data => {this.education = data});
          alert ("Se elimino correctamente el elemento selecionado.");
        },
        err => {
          alert ("No se puedo eliminar la experiencia selecionada");
        }
        )
      }
    }

}
