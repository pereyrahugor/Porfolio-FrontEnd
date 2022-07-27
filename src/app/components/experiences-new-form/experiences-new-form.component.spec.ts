import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencesNewFormComponent } from './experiences-new-form.component';

describe('ExperiencesNewFormComponent', () => {
  let component: ExperiencesNewFormComponent;
  let fixture: ComponentFixture<ExperiencesNewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperiencesNewFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperiencesNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
