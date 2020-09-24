import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewTraineeComponent } from './add-new-trainee.component';

describe('AddNewTraineeComponent', () => {
  let component: AddNewTraineeComponent;
  let fixture: ComponentFixture<AddNewTraineeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewTraineeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewTraineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
