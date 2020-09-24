import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpTrialTrainingComponent } from './sign-up-trial-training.component';

describe('SignUpTrialTrainingComponent', () => {
  let component: SignUpTrialTrainingComponent;
  let fixture: ComponentFixture<SignUpTrialTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpTrialTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpTrialTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
