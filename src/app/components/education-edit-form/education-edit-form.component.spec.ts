import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationEditFormComponent } from './education-edit-form.component';

describe('EducationEditFormComponent', () => {
  let component: EducationEditFormComponent;
  let fixture: ComponentFixture<EducationEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationEditFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
