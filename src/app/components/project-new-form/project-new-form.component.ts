import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { project } from 'src/app/model/project.model';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-project-new-form',
  templateUrl: './project-new-form.component.html',
  styleUrls: ['./project-new-form.component.css']
})
export class ProjectNewFormComponent implements OnInit {

    imgProject!: String;
    nameProject!: String;
    descriptionProject!: String;
    linkProject!: String;

  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit(): void {}

  onNewProject(): void {
    const pro = new project(this.imgProject, this.nameProject, this.descriptionProject, this.linkProject);
    console.log(project);
    this.projectService.saveProject(pro).subscribe(data=>{
      alert("Se agrego un nuevo proyecto correctamente");
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

