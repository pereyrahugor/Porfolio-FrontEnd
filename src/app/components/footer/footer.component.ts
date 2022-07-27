import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  persona: persona = new persona("", "", "", "", "", "", "", "","");

  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.listPersona().subscribe(data => {this.persona = data})
  }

}
