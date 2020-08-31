import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyOrdersDetailsComponent } from './agency-orders-details.component';

describe('AgencyOrdersDetailsComponent', () => {
  let component: AgencyOrdersDetailsComponent;
  let fixture: ComponentFixture<AgencyOrdersDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgencyOrdersDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyOrdersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
