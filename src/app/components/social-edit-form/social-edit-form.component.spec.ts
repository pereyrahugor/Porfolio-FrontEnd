import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialEditFormComponent } from './social-edit-form.component';

describe('SocialEditFormComponent', () => {
  let component: SocialEditFormComponent;
  let fixture: ComponentFixture<SocialEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialEditFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
