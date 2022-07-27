import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillNewFormComponent } from './skill-new-form.component';

describe('SkillNewFormComponent', () => {
  let component: SkillNewFormComponent;
  let fixture: ComponentFixture<SkillNewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillNewFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
