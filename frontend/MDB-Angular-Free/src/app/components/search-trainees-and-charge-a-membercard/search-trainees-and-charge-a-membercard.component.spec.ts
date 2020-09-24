import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTraineesAndChargeAMembercardComponent } from './search-trainees-and-charge-a-membercard.component';

describe('SearchTraineesAndChargeAMembercardComponent', () => {
  let component: SearchTraineesAndChargeAMembercardComponent;
  let fixture: ComponentFixture<SearchTraineesAndChargeAMembercardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTraineesAndChargeAMembercardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTraineesAndChargeAMembercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
