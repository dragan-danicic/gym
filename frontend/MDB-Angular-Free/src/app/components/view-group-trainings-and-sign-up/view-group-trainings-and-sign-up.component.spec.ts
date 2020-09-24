import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGroupTrainingsAndSignUpComponent } from './view-group-trainings-and-sign-up.component';

describe('ViewGroupTrainingsAndSignUpComponent', () => {
  let component: ViewGroupTrainingsAndSignUpComponent;
  let fixture: ComponentFixture<ViewGroupTrainingsAndSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewGroupTrainingsAndSignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGroupTrainingsAndSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
