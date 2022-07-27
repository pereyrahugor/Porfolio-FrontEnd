import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-persona-edit-form',
  templateUrl: './persona-edit-form.component.html',
  styleUrls: ['./persona-edit-form.component.css']
})
export class PersonaEditFormComponent implements OnInit {

  per: persona = null;

  constructor(private personaService: PersonaService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaService.detailPersona(id).subscribe(
      data => {
        this.per = data;
      }, err => {
        alert("La modificación Falló");
        this.router.navigate(['']);
      }
    )
  }

  onUpdatePersona():void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaService.updatePersona(id, this.per).subscribe(
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
