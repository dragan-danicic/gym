import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargeAMemberCardComponent } from './charge-a-member-card.component';

describe('ChargeAMemberCardComponent', () => {
  let component: ChargeAMemberCardComponent;
  let fixture: ComponentFixture<ChargeAMemberCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChargeAMemberCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargeAMemberCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
