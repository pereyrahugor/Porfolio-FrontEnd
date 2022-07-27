import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceEditFormComponent } from './experience-edit-form.component';

describe('ExperienceEditFormComponent', () => {
  let component: ExperienceEditFormComponent;
  let fixture: ComponentFixture<ExperienceEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceEditFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
