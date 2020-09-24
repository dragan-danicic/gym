import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTrainersStatsComponent } from './view-trainers-stats.component';

describe('ViewTrainersStatsComponent', () => {
  let component: ViewTrainersStatsComponent;
  let fixture: ComponentFixture<ViewTrainersStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTrainersStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTrainersStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
