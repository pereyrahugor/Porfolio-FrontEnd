import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectEditFormComponent } from './project-edit-form.component';

describe('ProjectEditFormComponent', () => {
  let component: ProjectEditFormComponent;
  let fixture: ComponentFixture<ProjectEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectEditFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
