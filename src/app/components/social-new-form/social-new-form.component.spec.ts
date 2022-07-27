import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialNewFormComponent } from './social-new-form.component';

describe('SocialNewFormComponent', () => {
  let component: SocialNewFormComponent;
  let fixture: ComponentFixture<SocialNewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialNewFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
