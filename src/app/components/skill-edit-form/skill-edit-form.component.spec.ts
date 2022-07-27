import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillEditFormComponent } from './skill-edit-form.component';

describe('SkillEditFormComponent', () => {
  let component: SkillEditFormComponent;
  let fixture: ComponentFixture<SkillEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillEditFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
