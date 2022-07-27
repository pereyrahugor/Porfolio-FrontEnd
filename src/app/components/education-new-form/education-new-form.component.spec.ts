import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationNewFormComponent } from './education-new-form.component';

describe('EducationNewFormComponent', () => {
  let component: EducationNewFormComponent;
  let fixture: ComponentFixture<EducationNewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationNewFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
