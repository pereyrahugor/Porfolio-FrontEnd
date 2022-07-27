import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { social } from 'src/app/model/social.model';
import { SocialService } from 'src/app/service/social.service';

@Component({
  selector: 'app-social-new-form',
  templateUrl: './social-new-form.component.html',
  styleUrls: ['./social-new-form.component.css']
})
export class SocialNewFormComponent implements OnInit {

    imgSocial!: String;
    nameSocial!: String;
    linkSocial!: String;

  constructor(private socialService: SocialService, private router: Router) { }

  ngOnInit(): void {}

  onNewSocial(): void {
    const soc = new social(this.imgSocial, this.nameSocial, this.linkSocial);
    console.log(social);
    this.socialService.saveSocial(soc).subscribe(data=>{
      alert("Se agrego una nueva red social correctamente");
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
