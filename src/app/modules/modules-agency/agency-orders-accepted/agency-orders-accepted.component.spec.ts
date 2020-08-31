import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyOrdersAcceptedComponent } from './agency-orders-accepted.component';

describe('AgencyOrdersAcceptedComponent', () => {
  let component: AgencyOrdersAcceptedComponent;
  let fixture: ComponentFixture<AgencyOrdersAcceptedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgencyOrdersAcceptedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyOrdersAcceptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
