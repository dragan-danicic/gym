import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAGroupTrainingComponent } from './create-a-group-training.component';

describe('CreateAGroupTrainingComponent', () => {
  let component: CreateAGroupTrainingComponent;
  let fixture: ComponentFixture<CreateAGroupTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAGroupTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAGroupTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
