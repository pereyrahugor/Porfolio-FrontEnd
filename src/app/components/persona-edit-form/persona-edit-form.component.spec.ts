import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaEditFormComponent } from './persona-edit-form.component';

describe('PersonaEditFormComponent', () => {
  let component: PersonaEditFormComponent;
  let fixture: ComponentFixture<PersonaEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaEditFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonaEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
