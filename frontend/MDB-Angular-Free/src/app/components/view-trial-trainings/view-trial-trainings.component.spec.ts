import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTrialTrainingsComponent } from './view-trial-trainings.component';

describe('ViewTrialTrainingsComponent', () => {
  let component: ViewTrialTrainingsComponent;
  let fixture: ComponentFixture<ViewTrialTrainingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTrialTrainingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTrialTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
