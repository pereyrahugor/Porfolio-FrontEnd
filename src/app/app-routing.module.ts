import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationEditFormComponent } from './components/education-edit-form/education-edit-form.component';
import { EducationNewFormComponent } from './components/education-new-form/education-new-form.component';
import { Error404Component } from './components/error404/error404.component';
import { ExperienceEditFormComponent } from './components/experience-edit-form/experience-edit-form.component';
import { ExperiencesNewFormComponent } from './components/experiences-new-form/experiences-new-form.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PersonaEditFormComponent } from './components/persona-edit-form/persona-edit-form.component';
import { ProjectEditFormComponent } from './components/project-edit-form/project-edit-form.component';
import { ProjectNewFormComponent } from './components/project-new-form/project-new-form.component';
import { SkillEditFormComponent } from './components/skill-edit-form/skill-edit-form.component';
import { SkillNewFormComponent } from './components/skill-new-form/skill-new-form.component';
import { SocialEditFormComponent } from './components/social-edit-form/social-edit-form.component';
import { SocialNewFormComponent } from './components/social-new-form/social-new-form.component';
import { TestsComponent } from './components/tests/tests.component';

const routes: Routes = [
   {path:'', component: HomeComponent},
   {path:'login', component: LoginComponent},
   {path:'tests', component: TestsComponent},
   {path:'editPersona/:id', component: PersonaEditFormComponent},
   {path:'newExperience', component: ExperiencesNewFormComponent},
   {path:'editExperience/:id', component: ExperienceEditFormComponent},
   {path:'newEducation', component: EducationNewFormComponent},
   {path:'editEducation/:id', component: EducationEditFormComponent},
   {path:'newSkill', component: SkillNewFormComponent},
   {path:'editSkill/:id', component: SkillEditFormComponent},
   {path:'newProject', component: ProjectNewFormComponent},
   {path:'editProject/:id', component: ProjectEditFormComponent},
   {path:'newSocial', component: SocialNewFormComponent},
   {path:'editSocial/:id', component: SocialEditFormComponent},
   {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
