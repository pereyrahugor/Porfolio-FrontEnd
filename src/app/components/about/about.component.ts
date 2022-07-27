import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  persona: persona = new persona("", "", "", "", "", "", "", "","");
  isLogged = false;

  constructor(public personaService: PersonaService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.getDataPersona();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }

  getDataPersona(){
    this.personaService.listPersona().subscribe(data => {this.persona = data});
  }

}

