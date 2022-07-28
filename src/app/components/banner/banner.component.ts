import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  persona: persona = new persona("", "", "", "", "", "", "", "","","");

  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.listPersona().subscribe(data => {this.persona = data})
  }

}
