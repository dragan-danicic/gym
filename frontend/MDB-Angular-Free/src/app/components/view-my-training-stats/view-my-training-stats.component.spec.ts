import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyTrainingStatsComponent } from './view-my-training-stats.component';

describe('ViewMyTrainingStatsComponent', () => {
  let component: ViewMyTrainingStatsComponent;
  let fixture: ComponentFixture<ViewMyTrainingStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMyTrainingStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMyTrainingStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
