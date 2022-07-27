import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoArgProgComponent } from './components/logo-arg-prog/logo-arg-prog.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { EducationComponent } from './components/education/education.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectComponent } from './components/project/project.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { Error404Component } from './components/error404/error404.component';
import { interceptorProvider } from './service/interseptor.service';
import { TestsComponent } from './components/tests/tests.component';
import { ProjectNewFormComponent } from './components/project-new-form/project-new-form.component';
import { SkillNewFormComponent } from './components/skill-new-form/skill-new-form.component';
import { EducationNewFormComponent } from './components/education-new-form/education-new-form.component';
import { ExperiencesNewFormComponent } from './components/experiences-new-form/experiences-new-form.component';
import { ExperienceEditFormComponent } from './components/experience-edit-form/experience-edit-form.component';
import { EducationEditFormComponent } from './components/education-edit-form/education-edit-form.component';
import { SkillEditFormComponent } from './components/skill-edit-form/skill-edit-form.component';
import { ProjectEditFormComponent } from './components/project-edit-form/project-edit-form.component';
import { PersonaEditFormComponent } from './components/persona-edit-form/persona-edit-form.component';
import { SocialEditFormComponent } from './components/social-edit-form/social-edit-form.component';
import { SocialNewFormComponent } from './components/social-new-form/social-new-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoArgProgComponent,
    BannerComponent,
    AboutComponent,
    ExperiencesComponent,
    EducationComponent,
    SkillsComponent,
    ProjectComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    Error404Component,
    TestsComponent,
    ProjectNewFormComponent,
    SkillNewFormComponent,
    EducationNewFormComponent,
    ExperiencesNewFormComponent,
    ExperienceEditFormComponent,
    EducationEditFormComponent,
    SkillEditFormComponent,
    ProjectEditFormComponent,
    PersonaEditFormComponent,
    SocialEditFormComponent,
    SocialNewFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
