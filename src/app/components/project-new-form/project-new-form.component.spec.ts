import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectNewFormComponent } from './project-new-form.component';

describe('ProjectNewFormComponent', () => {
  let component: ProjectNewFormComponent;
  let fixture: ComponentFixture<ProjectNewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectNewFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
