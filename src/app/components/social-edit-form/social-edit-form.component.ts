import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { social } from 'src/app/model/social.model';
import { SocialService } from 'src/app/service/social.service';

@Component({
  selector: 'app-social-edit-form',
  templateUrl: './social-edit-form.component.html',
  styleUrls: ['./social-edit-form.component.css']
})
export class SocialEditFormComponent implements OnInit {

  soc: social = null;

  constructor(private socialService: SocialService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.socialService.detailSocial(id).subscribe(
      data => {
        this.soc = data;
      }, err => {
        alert("La modificación Falló");
        this.router.navigate(['']);
      }
    )
  }

  onUpdateSocial():void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.socialService.updateSocial(id, this.soc).subscribe(
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