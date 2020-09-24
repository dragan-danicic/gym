import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGroupTrainingsComponent } from './view-group-trainings.component';

describe('ViewGroupTrainingsComponent', () => {
  let component: ViewGroupTrainingsComponent;
  let fixture: ComponentFixture<ViewGroupTrainingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewGroupTrainingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGroupTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
