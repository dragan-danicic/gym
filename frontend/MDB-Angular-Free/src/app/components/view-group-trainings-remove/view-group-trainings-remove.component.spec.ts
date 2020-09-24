import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGroupTrainingsRemoveComponent } from './view-group-trainings-remove.component';

describe('ViewGroupTrainingsRemoveComponent', () => {
  let component: ViewGroupTrainingsRemoveComponent;
  let fixture: ComponentFixture<ViewGroupTrainingsRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewGroupTrainingsRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGroupTrainingsRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
