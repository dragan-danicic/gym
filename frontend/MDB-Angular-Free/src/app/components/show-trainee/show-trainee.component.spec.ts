import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTraineeComponent } from './show-trainee.component';

describe('ShowTraineeComponent', () => {
  let component: ShowTraineeComponent;
  let fixture: ComponentFixture<ShowTraineeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTraineeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTraineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
